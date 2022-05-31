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
            .then(response => setIndexCards(response.filter(card => card.term1.includes(searchTerm) || card.term2.includes(searchTerm))))
        // eslint-disable-next-line
    }, [searchTerm])

    return (
        <TextField placeholder={"Enter a search term..."}
                   value={searchTerm}
                   onChange={(event) => setSearchTerm(event.target.value)}/>
    )
}