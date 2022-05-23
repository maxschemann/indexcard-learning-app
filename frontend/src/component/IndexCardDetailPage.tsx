import IndexCardComponent from "./IndexCardComponent";
import {IndexCard} from "../model/IndexCard";

type detailsProps = {
    indexCard: IndexCard
}
export default function IndexCardDetailPage({indexCard}: detailsProps) {
    return (
        <IndexCardComponent indexCard={indexCard}/>
    )
}