import {IndexCard} from "../model/IndexCard";
import SortIndexCards from "./SortIndexCards";
import {Button, Card, CardContent} from "@mui/material";
import Game from "./Game";
import {useState} from "react";
import '../styles/GameOptions.css';

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

    const [deck, setDeck] = useState<IndexCard[]>()

    return (
        <div id={"game"}>
            <Card>
                <CardContent>
                    <div id={"gameOptions"}>
                        <SortIndexCards setIndexCards={setIndexCards}/>
                        <Button onClick={() => {
                            setDeck(reorderCards())
                            setGameOn(!gameOn)
                        }}>
                            Start game</Button>
                    </div>
                        {
                            gameOn && deck && <Game deck={deck}
                                            updateIndexCard={updateIndexCard}/>
                        }
                </CardContent>
            </Card>
        </div>
    )
}
