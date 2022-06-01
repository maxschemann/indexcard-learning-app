import {IndexCard} from "../model/IndexCard";
import IndexCardData from "./IndexCardData";
import {useState} from "react";
import {Fab} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

type GameProps = {
    indexCards: IndexCard[]
}

export default function Game({indexCards}: GameProps) {

    const [translation, setTranslation] = useState<string>("")

    const [index, setIndex] = useState<number>(0)

    const reorderCards = () => {
        return randomIndexArray().map(randomIndex => indexCards[randomIndex])
    }

    const randomIndexArray = () => {
        const indexArray: number[] = []
        let counter = 0
        while (counter < indexCards.length) {
            const rdmIndex = Math.floor(Math.random() * indexCards.length)
            if (indexArray.indexOf(rdmIndex) === -1) {
                indexArray.push(rdmIndex)
                counter++
            }
        }
        return indexArray
    }

    const deck = reorderCards()

    const [nextCard, setNextCard] = useState<IndexCard>(deck[index])

    const submitTranslation = (enteredTranslation: string) => {
        if (enteredTranslation === nextCard.term2) {
            setIndex(index + 1)
            setNextCard(deck[index])
        }
    }

    return (
        <div>
            {index <= deck.length ? (
                    <form onSubmit={() => translation && submitTranslation(translation)}>
                        <IndexCardData indexCard={nextCard}
                                       gameMode={true}
                                       translation={translation}
                                       setTranslation={setTranslation}/>
                        <Fab type={"submit"}>
                            <AddIcon/>
                        </Fab>
                        <div>{translation}</div>
                    </form>
                )
                :
                (
                    <div>win</div>
                )}
        </div>
    )
}