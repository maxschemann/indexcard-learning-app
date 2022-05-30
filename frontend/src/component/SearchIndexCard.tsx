import {useEffect, useState} from "react";
import {TextField} from "@mui/material";
import {IndexCard} from "../model/IndexCard";

type SearchIndexCardProps = {
    indexCards: IndexCard[],
    setIndexCards: (indexCards: IndexCard[]) => void
}

export default function SearchIndexCard({indexCards, setIndexCards}: SearchIndexCardProps) {

    const [searchTerm, setSearchTerm] = useState<string>("")

    useEffect(() => {
        setIndexCards(indexCards.filter(card => card.term1.includes(searchTerm) || card.term2.includes(searchTerm)))
    }, [searchTerm, indexCards, setIndexCards])

    return (
        <TextField placeholder={"Enter a search term..."}
                   value={searchTerm}
                   onChange={(event)=>setSearchTerm(event.target.value)}/>
    )
}