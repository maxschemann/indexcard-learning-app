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
            console.log("correct")
            reevaluateDifficulty(1)
            updateIndexCardDto()
            setIndex(index + 1)
            setNextCard(deck[index])
            setTranslation("")
            setDifficulty(nextCard.difficulty)
            console.log("Next Difff: "+ nextCard.difficulty)
        }
        else {
            console.log("wrong")
            reevaluateDifficulty(0)
            updateIndexCardDto()
            setIndex(index + 1)
            console.log("Next Index: "+ index)
            setNextCard(deck[index])
            setTranslation("")
            setDifficulty(nextCard.difficulty)
            console.log("Next Difff: "+ nextCard.difficulty)
        }
    }

    const updateIndexCardDto = () => {
        const newDto = {
            term1: nextCard.term1,
            term2: nextCard.term2,
            difficulty: difficulty
        }
        console.log(newDto.term1)
        console.log(newDto.term2)
        console.log(newDto.difficulty)
    }

    const reevaluateDifficulty = (upOrDown: number) => {
        console.log("Reeval: "+nextCard.difficulty)
        console.log("Reeval: "+nextCard.difficulty)
        if (upOrDown === 1 && nextCard.difficulty.toString()===Difficulty[Difficulty.HARD]) {
            console.log("1-Before: "+difficulty)
            setDifficulty(1)
            console.log("1-After: "+difficulty)
        }
        if (upOrDown === 1 && nextCard.difficulty.toString()===Difficulty[Difficulty.MEDIUM]) {
            console.log("2-Before: "+difficulty)
            setDifficulty(0)
            console.log("2-After: "+difficulty)
        }
        if (upOrDown === 0 && nextCard.difficulty.toString()===Difficulty[Difficulty.MEDIUM]) {
            console.log("3-Before: "+difficulty)
            setDifficulty(2)
            console.log("3-After: "+difficulty)
        }
        if (upOrDown === 0 && nextCard.difficulty.toString()===Difficulty[Difficulty.EASY]) {
            console.log("4-Before: "+difficulty)
            setDifficulty(1)
            console.log("4-After: "+difficulty)
        }
        else console.log("Kaputt")
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