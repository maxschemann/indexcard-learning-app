import {IndexCard} from "../model/IndexCard";
import IndexCardComponent from "./IndexCardComponent";

type overviewProps= {
    indexCards: IndexCard[]
    addNewIndexCard: (newIndexCard: Omit<IndexCard, "id">) => void
    updateIndexCard: (indexCard: IndexCard) => void
}

export default function IndexCardOverview({indexCards, addNewIndexCard, updateIndexCard}: overviewProps) {
    return (
        <div>
            {indexCards.map( card => <IndexCardComponent indexCard={card} addNewIndexCard={addNewIndexCard} updateIndexCard={updateIndexCard}/>)}
        </div>
    )
}