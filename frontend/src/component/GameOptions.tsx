import {IndexCard} from "../model/IndexCard";
import SortIndexCards from "./SortIndexCards";
import {Button, Typography} from "@mui/material";
import Game from "./Game";
import {useState} from "react";

type GameOptionsProps = {
    indexCards: IndexCard[],
    setIndexCards: (indexCards: IndexCard[]) => void
}

export default function GameOptions({indexCards, setIndexCards}: GameOptionsProps) {

    const [gameOn, setGameOn] = useState<boolean>(false)

    return (
        <div>
            <Typography>Select difficulty</Typography>
            <SortIndexCards indexCards={indexCards} setIndexCards={setIndexCards}/>
            <Button onClick={() => setGameOn(!gameOn)}>Start game</Button>
            {
                gameOn && <Game indexCards={indexCards}/>
            }

        </div>
    )
}