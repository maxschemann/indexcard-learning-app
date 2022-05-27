import IndexCardComponent from "./IndexCardComponent";
import React from "react";
import {IndexCard} from "../model/IndexCard";

type IndexCardOverviewProps = {
    indexCards: IndexCard[],
}

export default function IndexCardOverview({indexCards}: IndexCardOverviewProps) {

    return (
        <div>
            {indexCards.map(card => <IndexCardComponent indexCard={card}/>)}
        </div>
    )
}