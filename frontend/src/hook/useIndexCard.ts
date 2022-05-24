import {IndexCard} from "../model/IndexCard";
import {getAllIndexCards, postIndexCard, putIndexCard} from "../service/apiService";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";

export default function useIndexCard() {

    const [indexCards, setIndexCards] = useState<IndexCard[]>([])

    useEffect(() => {
        getAllIndexCards()
            .then(response => setIndexCards(response))
            .catch(() => toast.error("Unable to fetch index cards!"))
    }, [])

    const addNewIndexCard: (newIndexCard: Omit<IndexCard, "id">) => void = (newIndexCard) => {
        postIndexCard(newIndexCard)
            .then(addedIndexCard => setIndexCards([...indexCards, addedIndexCard]))
            .then(() => toast.success("Index card saved!"))
            .catch(() => toast.error("Failed to add!"))
    }

    const updateIndexCard = (indexCard: IndexCard) => {
        return putIndexCard(indexCard)
            .then(() => setIndexCards(() => {
                const updatedList = indexCards.filter(card => card.id !== indexCard.id)
                return {...updatedList, indexCard}
            }))
            .then(() => toast.success("Index card updated!"))
            .catch(() => toast.error("Failed to add!"))
    }

    return {indexCards, addNewIndexCard, updateIndexCard}
}