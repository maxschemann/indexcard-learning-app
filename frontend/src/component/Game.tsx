import {Difficulty, IndexCard} from "../model/IndexCard";
import {useState} from "react";
import {Fab, TextField} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

type GameProps = {
    deck: IndexCard[],
    updateIndexCard: (id: string, indexCard: Omit<IndexCard, "id">) => void
}

export default function Game({deck, updateIndexCard}: GameProps) {

    const [translation, setTranslation] = useState<string>("")

    const [index, setIndex] = useState<number>(0)

    const [nextCard, setNextCard] = useState<IndexCard>(deck[index])

    const pickNextCard = () => {
        setIndex(index + 1)
        setNextCard(deck[index])
        setTranslation("")
    }

    const submitTranslation = () => {
        if (translation === nextCard.term2 && nextCard.difficulty.toString() === Difficulty[Difficulty.EASY]) {
            pickNextCard()
        }
        if (translation !== nextCard.term2 && nextCard.difficulty.toString() === Difficulty[Difficulty.HARD]) {
            pickNextCard()
        }
        if (translation === nextCard.term2) {
                const createDto = reevaluateDifficulty('DOWN')
                updateIndexCard(nextCard.id, createDto)
                pickNextCard()
            }
         else {
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

    return (
        <div>
            {index <= deck.length ? (
                    <div>
                        <TextField value={nextCard.term1} disabled={true}/>
                        <TextField value={translation} placeholder={"Enter"}
                                   onChange={event => setTranslation(event.target.value)}/>
                        <Fab onClick={submitTranslation}>
                            <AddIcon/>
                        </Fab>

                    </div>
                )
                :
                (
                    <div>win</div>
                )}
        </div>
    )
}