import {IndexCard} from "../model/IndexCard";
import IndexCardData from "./IndexCardData";
import {useState} from "react";

type GameProps = {
    indexCards: IndexCard[]
}

export default function Game({indexCards}: GameProps) {

    const [translation, setTranslation] = useState<string>("")

    const reorderCards = () => {
        return randomIndexArray().map(index => indexCards[index])
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

    return (
        <div>
            {
                reorderCards().map(card => <IndexCardData indexCard={card}
                                                          gameMode={true}
                                                          translation={translation}
                                                          setTranslation={setTranslation}/>)
            }
            <div>{translation}</div>
        </div>
    )
}