import {IndexCard} from "../model/IndexCard";
import {postIndexCard} from "../service/apiService";
import {useState} from "react";
import {toast} from "react-toastify";

export default function useIndexCard() {

    const [indexCards, setIndexCards] = useState<IndexCard[]>([])

    const addNewIndexCard: (newIndexCard: Omit<IndexCard, "id">) => void = (newIndexCard) => {
        postIndexCard(newIndexCard)
            .then(addedIndexCard => setIndexCards([...indexCards, addedIndexCard]))
            .then(() => toast.success("Index card saved!"))
            .catch(() => toast.error("Failed to add"))
    }
    return {addNewIndexCard}
}