import {IndexCard} from "../model/IndexCard";
import SortIndexCards from "./SortIndexCards";
import {Button, Typography} from "@mui/material";
import Game from "./Game";

type GameOptionsProps = {
    indexCards: IndexCard[],
    setIndexCards: (indexCards: IndexCard[]) => void
}

export default function GameOptions({indexCards, setIndexCards}: GameOptionsProps) {

    const startGame = () => {
        return (
            <div>
                <Game indexCards={indexCards}/>
            </div>
        )
    }

    return (
        <div>
            <Typography>Select difficulty</Typography>
            <SortIndexCards indexCards={indexCards} setIndexCards={setIndexCards}/>
            <Button onClick={startGame}>Start game</Button>
        </div>
    )
}