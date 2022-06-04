import {Difficulty, IndexCard} from "../model/IndexCard";
import {useEffect, useState} from "react";
import {Fab, TextField} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {toast} from "react-toastify";

type GameProps = {
    deck: IndexCard[],
    updateIndexCard: (id: string, indexCard: Omit<IndexCard, "id">) => void,
}

export default function Game({deck, updateIndexCard}: GameProps) {

    const [translation, setTranslation] = useState<string>("")

    const [index, setIndex] = useState<number>(0)

    const [nextCard, setNextCard] = useState<IndexCard>()

    useEffect(() => {
        setNextCard(deck[index])
    }, [index, deck])

    const reevaluateDifficulty = (previousCard: IndexCard) => {
        const difficultyString = previousCard.difficulty.toString()

        if (translation === previousCard.term2) {
            if (difficultyString === Difficulty[Difficulty.EASY]) throw new Error("Too easy!")
            if (difficultyString === Difficulty[Difficulty.HARD]) return createIndexCardDto(Difficulty.MEDIUM, previousCard)
            if (difficultyString === Difficulty[Difficulty.MEDIUM]) return createIndexCardDto(Difficulty.EASY, previousCard)
        }
        if (translation !== previousCard.term2) {
            if (difficultyString === Difficulty[Difficulty.HARD]) throw new Error("Already difficult!")
            if (difficultyString === Difficulty[Difficulty.MEDIUM]) return createIndexCardDto(Difficulty.HARD, previousCard)
            if (difficultyString === Difficulty[Difficulty.EASY]) return createIndexCardDto(Difficulty.MEDIUM, previousCard)
        }
    }

    const submitTranslation = () => {
        try {
            const createDto = nextCard && reevaluateDifficulty(nextCard)
            createDto && nextCard && updateIndexCard(nextCard.id, createDto)
        } catch (e: any) {
            toast(e.message)
        }
        setIndex(index + 1)
        setTranslation("")
    }

    const createIndexCardDto = (newDifficulty: Difficulty, previousCard: IndexCard) => {
        return {
            term1: previousCard.term1,
            term2: previousCard.term2,
            difficulty: newDifficulty
        }
    }

    return (
        <div>
            {deck.length > 0 && nextCard ? (
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