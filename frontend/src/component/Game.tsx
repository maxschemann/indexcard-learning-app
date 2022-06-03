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

    const updateIndexCardDto = (diff: number) => {
        let newDifficulty: Difficulty = Difficulty.MEDIUM
        if (diff===0) newDifficulty = Difficulty.EASY
        if (diff===1) newDifficulty = Difficulty.MEDIUM
        if (diff===2) newDifficulty = Difficulty.HARD
        const newDto = {
            term1: nextCard.term1,
            term2: nextCard.term2,
            difficulty: newDifficulty
        }
        updateIndexCard(nextCard.id, newDto)
    }

    const reevaluateDifficulty = (upOrDown: number) => {
        if (upOrDown === 1 && nextCard.difficulty.toString()===Difficulty[Difficulty.HARD]) {
            updateIndexCardDto(1)
        }
        if (upOrDown === 1 && nextCard.difficulty.toString()===Difficulty[Difficulty.MEDIUM]) {
            updateIndexCardDto(0)
        }
        if (upOrDown === 0 && nextCard.difficulty.toString()===Difficulty[Difficulty.MEDIUM]) {
            updateIndexCardDto(2)
        }
        if (upOrDown === 0 && nextCard.difficulty.toString()===Difficulty[Difficulty.EASY]) {
            updateIndexCardDto(1)
        }
    }

    const submitTranslation = () => {

        if (translation === nextCard.term2) {
            reevaluateDifficulty(1)
            setIndex(index + 1)
            setNextCard(deck[index])
            setTranslation("")
        }
        else {
            reevaluateDifficulty(0)
            setIndex(index + 1)
            setNextCard(deck[index])
            setTranslation("")
        }
    }

    return (
        <div>
            {index <= deck.length ? (
                    <div>
                        <TextField value={nextCard.term1} disabled={true}/>
                        <TextField value={translation} placeholder={"Enter"} onChange={event => setTranslation(event.target.value)}/>
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