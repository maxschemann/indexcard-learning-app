import {IndexCard} from "../model/IndexCard";
import IndexCardComponent from "./IndexCardComponent";

type overviewProps= {
    indexCards: IndexCard[]
}

export default function IndexCardOverview({indexCards}: overviewProps) {
    return (
        <div>
            {indexCards.map( card => <IndexCardComponent indexCard={card}/>)}
        </div>
    )
}