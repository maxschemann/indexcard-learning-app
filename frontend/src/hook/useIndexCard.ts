import {IndexCard} from "../model/IndexCard";
import {postIndexCard} from "../service/apiService";
import {useState} from "react";

export default function useIndexCard() {

    const [indexCards, setIndexCards] = useState<IndexCard[]>([])

    const addNewIndexCard = (newIndexCard: Omit<IndexCard, "id">) => {
        postIndexCard(newIndexCard)
            .then(addedIndexCard => setIndexCards([...indexCards, addedIndexCard]))
            .catch(()=>console.log("failed to add"))
    }
}