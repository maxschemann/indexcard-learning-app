import {MenuItem, Select} from "@mui/material";
import {Difficulty, IndexCard} from "../model/IndexCard";

type SortIndexCardsProps = {
    indexCards: IndexCard[],
    setIndexCards: (indexCards: IndexCard[]) => void
}

export default function SortIndexCards({indexCards, setIndexCards}: SortIndexCardsProps) {

    const sortByDifficulty = (diff: number) => setIndexCards(indexCards.filter(card => card.difficulty.toString() === Difficulty[diff]))

    return (
        <Select placeholder={"Select Difficulty"}>
            <MenuItem onClick={() => sortByDifficulty(0)}>Easy</MenuItem>
            <MenuItem onClick={() => sortByDifficulty(1)}>Medium</MenuItem>
            <MenuItem onClick={() => sortByDifficulty(2)}>Hard</MenuItem>
        </Select>
    )
}