import {IndexCard} from "../model/IndexCard";
import IndexCardData from "./IndexCardData";

type GameProps = {
    indexCards: IndexCard[]
}

export default function Game({indexCards}:GameProps) {

    const reorderCards = () => {
        console.log(randomIndexArray().map(index => indexCards[index]))
        return randomIndexArray().map(index => indexCards[index])
    }

    const randomIndexArray = () => {
        const indexArray: number[] = []
        let counter = 0
        while (counter<indexCards.length) {
            const rdmIndex = Math.floor(Math.random() * indexCards.length)
            if (indexArray.indexOf(rdmIndex)=== -1) {
                indexArray.push(rdmIndex)
                counter++
            }
        }
        console.log(indexArray)
        return indexArray
    }


    return (
        <div>
            {
                reorderCards().map(card => <IndexCardData indexCard={card}/>)
            }
        </div>
    )
}