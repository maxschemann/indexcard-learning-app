import {IndexCard} from "../model/IndexCard";
import axios from "axios";

export const postIndexCard: (indexCard: Omit<IndexCard, "id">) => Promise<IndexCard> = (indexCard) => {
    return axios.post("/api/index-card", indexCard)
        .then(response => response.data)
}

export const getAllIndexCards = () => {
    return axios.get("/api/index-card")
        .then(response => response.data)
}

export const putIndexCard = (indexCard: IndexCard) => {
    return axios.put("/api/index-card", indexCard)
        .then(response => response.data)
}

