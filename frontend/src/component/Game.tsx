import {Difficulty, IndexCard} from "../model/IndexCard";
import {useEffect, useState} from "react";
import {Fab, TextField} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

type GameProps = {
    deck: IndexCard[],
    updateIndexCard: (id: string, indexCard: Omit<IndexCard, "id">) => void,
    setDeck: (indexCards: IndexCard[]) => void
}

export default function Game({deck, updateIndexCard, setDeck}: GameProps) {

    const [translation, setTranslation] = useState<string>("")

    const [index, setIndex] = useState<number>(0)

    const [nextCard, setNextCard] = useState<IndexCard>(deck[index])

    useEffect(() => console.log(index), [index])

    const pickNextCard = () => {
        setIndex(index + 1)
        console.log(deck.map(c => c.term1))
        let previousCard = nextCard
        setNextCard(deck[index])
        setDeck(deck.filter(card => card.id !== previousCard.id))
        console.log(nextCard.term1)
        setTranslation("")
    }

    const getNextCard = (deckNext: IndexCard[]) => {
        return deckNext.pop()
    }

    const submitTranslation = () => {
        if (translation === nextCard.term2 && nextCard.difficulty.toString() === Difficulty[Difficulty.EASY]) {
            console.log("Correct and too easy")
            pickNextCard()
        }
        if (translation !== nextCard.term2 && nextCard.difficulty.toString() === Difficulty[Difficulty.HARD]) {
            console.log("Not correct and hard")
            pickNextCard()
        }
        if (translation === nextCard.term2) {
            console.log("Correct")
            const createDto = reevaluateDifficulty('DOWN')
            updateIndexCard(nextCard.id, createDto)
            pickNextCard()
        } else {
            console.log("4")
            const createDto = reevaluateDifficulty('UP')
            updateIndexCard(nextCard.id, createDto)
            pickNextCard()
        }
    }

    const reevaluateDifficulty = (upOrDown: string) => {
        if (upOrDown === 'DOWN' && nextCard.difficulty.toString() === Difficulty[Difficulty.HARD]) {
            return createIndexCardDto(1)
        }
        if (upOrDown === 'DOWN' && nextCard.difficulty.toString() === Difficulty[Difficulty.MEDIUM]) {
            return createIndexCardDto(0)
        }
        if (upOrDown === 'UP' && nextCard.difficulty.toString() === Difficulty[Difficulty.MEDIUM]) {
            return createIndexCardDto(2)
        }
        if (upOrDown === 'UP' && nextCard.difficulty.toString() === Difficulty[Difficulty.EASY]) {
            return createIndexCardDto(1)
        } else return createIndexCardDto(-1)
    }

    const createIndexCardDto = (diff: number) => {
        let newDifficulty: Difficulty = Difficulty.MEDIUM

        if (diff === -1) newDifficulty = nextCard.difficulty
        if (diff === 0) newDifficulty = Difficulty.EASY
        if (diff === 1) newDifficulty = Difficulty.MEDIUM
        if (diff === 2) newDifficulty = Difficulty.HARD

        return {
            term1: nextCard.term1,
            term2: nextCard.term2,
            difficulty: newDifficulty
        }
    }

    const updateCard = () => {
        return (
            <div>
                <TextField value={nextCard.term1} disabled={true}/>
                <TextField value={translation} placeholder={"Enter"}
                           onChange={event => setTranslation(event.target.value)}/>
                <Fab onClick={submitTranslation}>
                    <AddIcon/>
                </Fab>
            </div>
        )
    }

    return (
        <div>
            {deck.length > 0 ? (
                    updateCard()
                )
                :
                (
                    <div>win</div>
                )}
        </div>
    )
}