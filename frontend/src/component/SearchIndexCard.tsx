import {useEffect, useState} from "react";
import {TextField} from "@mui/material";
import {IndexCard} from "../model/IndexCard";
import {getAllIndexCards} from "../service/apiService";

type SearchIndexCardProps = {
    setIndexCards: (indexCards: IndexCard[]) => void
}

export default function SearchIndexCard({setIndexCards}: SearchIndexCardProps) {

    const [searchTerm, setSearchTerm] = useState<string>("")

    useEffect(() => {
        getAllIndexCards()
            .then(response => setIndexCards(response.filter(card => {
                    return (
                        card.term1.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        card.term2.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                }
            )))
        // eslint-disable-next-line
    }, [searchTerm])

    return (
        <TextField value={searchTerm}
                   onChange={(event) => setSearchTerm(event.target.value)}/>
    )
}