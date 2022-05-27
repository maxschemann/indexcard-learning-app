import {IndexCard} from "../model/IndexCard";
import {deleteIndexCard, getAllIndexCards, postIndexCard, putIndexCard} from "../service/apiService";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";

export default function useIndexCard() {

    const [indexCards, setIndexCards] = useState<IndexCard[]>([])

    const addNewIndexCard: (newIndexCard: Omit<IndexCard, "id">) => void = (newIndexCard) => {
        postIndexCard(newIndexCard)
            .then(addedIndexCard => setIndexCards([...indexCards, addedIndexCard]))
            .then(() => toast.success("Index card saved!"))
            .catch(() => toast.error("Failed to add!"))
    }

    const updateIndexCard = (id: string, indexCard: Omit<IndexCard, "id">) => {
         putIndexCard(id, indexCard)
            .then(updatedCard => setIndexCards(
                indexCards.map(card => card.id === id? updatedCard : card)))
            .then(() => toast.success("Index card updated!"))
            .catch(() => toast.error("Failed to add!"))
    }

    const removeIndexCard = (id: string) => {
        deleteIndexCard(id)
            .then(() => setIndexCards(
                indexCards.filter(card => card.id !== id)))
            .then(()=> {console.log(id)
            console.log(indexCards)})
            .then(() => toast.success("Index card deleted!"))
            .catch(() => toast.error("Failed to delete!"))
    }

    useEffect(() => {
        getAllIndexCards()
            .then(response => setIndexCards(response))
            .then(()=>{console.log("UE")
            console.log(indexCards)})
            .catch(() => toast.error("Unable to fetch index cards!"))
    }, [])

    return {indexCards, setIndexCards, addNewIndexCard, updateIndexCard, removeIndexCard}
}