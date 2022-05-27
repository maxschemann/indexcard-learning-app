import '../styles/Header.css'
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import SortIndexCards from "./SortIndexCards";
import SearchIndexCard from "./SearchIndexCard";
import React from "react";
import {IndexCard} from "../model/IndexCard";

type HeaderProps = {
    indexCards: IndexCard[],
    setIndexCards: (indexCards: IndexCard[]) => void
}

export default function Header({indexCards, setIndexCards}: HeaderProps) {

    const navigate = useNavigate()

    return <div id={"header"}>
        <Button onClick={() => navigate("/add")}>Add</Button>
        <SortIndexCards indexCards={indexCards} setIndexCards={setIndexCards}/>
        <SearchIndexCard indexCards={indexCards} setIndexCards={setIndexCards}/>
    </div>
}