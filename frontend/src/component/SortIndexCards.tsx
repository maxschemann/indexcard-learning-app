import {InputLabel, MenuItem, Select} from "@mui/material";
import {Difficulty, IndexCard} from "../model/IndexCard";
import {getAllIndexCards} from "../service/apiService";

type SortIndexCardsProps = {
    setIndexCards: (indexCards: IndexCard[]) => void
}

export default function SortIndexCards({setIndexCards}: SortIndexCardsProps) {

    const sortByDifficulty = (diff: number) => {
        getAllIndexCards()
            .then(response => response.filter(card => card.difficulty.toString() === Difficulty[diff]))
            .then(filteredCards => setIndexCards(filteredCards))
    }

    return (
        <div>
        <Select label={"Select Difficulty"}>
            <InputLabel>Select Difficulty</InputLabel>
            <MenuItem onClick={() => getAllIndexCards()
                .then(response => setIndexCards(response))}>All</MenuItem>
            <MenuItem onClick={() => sortByDifficulty(0)}>Easy</MenuItem>
            <MenuItem onClick={() => sortByDifficulty(1)}>Medium</MenuItem>
            <MenuItem onClick={() => sortByDifficulty(2)}>Hard</MenuItem>
        </Select>
        </div>
    )
}