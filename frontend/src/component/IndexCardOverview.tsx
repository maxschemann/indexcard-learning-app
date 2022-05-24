import IndexCardComponent from "./IndexCardComponent";
import useIndexCard from "../hook/useIndexCard";

export default function IndexCardOverview() {

    const {indexCards} = useIndexCard()

    return (
        <div>
            {indexCards.map(card => <IndexCardComponent indexCard={card}/>)}
        </div>
    )
}