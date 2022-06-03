import {Difficulty, IndexCard} from "../model/IndexCard";
import IndexCardData from "./IndexCardData";
import {FormEvent, useState} from "react";
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

    const [difficulty, setDifficulty] = useState<Difficulty>(nextCard.difficulty)

    const submitTranslation = () => {

        if (translation === nextCard.term2) {
            console.log("up")
            reevaluateDifficulty(1)
            updateIndexCard(nextCard.id, {...nextCard, difficulty: difficulty})
            setIndex(index + 1)
            setNextCard(deck[index])
            setTranslation("")
            console.log("Card after: "+nextCard.difficulty)
        }
        else {
            console.log("down")
            reevaluateDifficulty(0)
            updateIndexCard(nextCard.id, {...nextCard, difficulty: difficulty})
            setIndex(index + 1)
            setNextCard(deck[index])
            setTranslation("")
            console.log("Card after: "+nextCard.difficulty)
        }
    }

    const reevaluateDifficulty = (upOrDown: number) => {
        console.log("Diff before: "+nextCard.difficulty)
        if (upOrDown === 1 && nextCard.toString()===Difficulty[Difficulty.HARD]) {
            console.log("1")
            setDifficulty(Difficulty.MEDIUM)
        }
        if (upOrDown === 1 && nextCard.toString()===Difficulty[Difficulty.MEDIUM]) {
            console.log("2")
            setDifficulty(Difficulty.EASY)
        }
        if (upOrDown === 0 && nextCard.difficulty.toString()===Difficulty[Difficulty.MEDIUM]) {
            console.log("3")
            setDifficulty(Difficulty.HARD)
        }
        if (upOrDown === 0 && nextCard.difficulty.toString()===Difficulty[Difficulty.EASY]) {
            console.log("4")
            setDifficulty(Difficulty.MEDIUM)
        }

        console.log("Diff after: "+nextCard.difficulty)
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