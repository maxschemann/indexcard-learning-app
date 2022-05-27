import IndexCardComponent from "./IndexCardComponent";
import useIndexCard from "../hook/useIndexCard";
import EditIndexCard from "./EditIndexCard";
import React from "react";
import SearchIndexCard from "./SearchIndexCard";

export default function IndexCardOverview() {

    const {indexCards, setIndexCards} = useIndexCard()

    console.log("InOverview"+indexCards)

    return (
        <div>
            <SearchIndexCard indexCards={indexCards} setIndexCards={setIndexCards} />
            {indexCards.map(card => <IndexCardComponent indexCard={card}/>)}
            <EditIndexCard/>
        </div>
    )
}