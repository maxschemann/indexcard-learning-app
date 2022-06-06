import {IndexCard} from "../model/IndexCard";
import SortIndexCards from "./SortIndexCards";
import {Button} from "@mui/material";
import Game from "./Game";
import {useState} from "react";

type GameOptionsProps = {
    indexCards: IndexCard[],
    setIndexCards: (indexCards: IndexCard[]) => void,
    updateIndexCard: (id: string, indexCard: Omit<IndexCard, "id">) => void
}

export default function GameOptions({indexCards, setIndexCards, updateIndexCard}: GameOptionsProps) {

    const [gameOn, setGameOn] = useState<boolean>(false)

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

    const reorderCards = () => {
        return randomIndexArray().map(randomIndex => indexCards[randomIndex])
    }

    const [deck] = useState<IndexCard[]>(reorderCards)

    return (
        <div>
            <SortIndexCards setIndexCards={setIndexCards}/>
            <Button onClick={() => setGameOn(!gameOn)}>Start game</Button>
            {
                gameOn && <Game deck={deck}
                                updateIndexCard={updateIndexCard}/>
            }
        </div>
    )
}