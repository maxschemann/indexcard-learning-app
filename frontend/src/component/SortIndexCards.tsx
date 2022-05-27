import {MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {useEffect, useState} from "react";
import {Difficulty, IndexCard} from "../model/IndexCard";
import useIndexCard from "../hook/useIndexCard";

type SortIndexCardsProps = {
difficulty: Difficulty,
setDifficulty: (difficulty: Difficulty) => void
}

export default function SortIndexCards({difficulty, setDifficulty}: SortIndexCardsProps) {
    /*
    return (
        <Select placeholder={"Select Difficulty"}>
            <MenuItem onClick={() => selectDifficulty(1)}>Easy</MenuItem>
            <MenuItem onClick={() => setDifficulty(2)}>Medium</MenuItem>
            <MenuItem onClick={() => setDifficulty(3)}>Hard</MenuItem>
        </Select>

    )
*/

}