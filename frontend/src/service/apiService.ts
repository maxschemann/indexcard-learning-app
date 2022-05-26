import {IndexCard} from "../model/IndexCard";
import axios from "axios";

const url = "/api/index-card/"

export const postIndexCard: (indexCardDto: Omit<IndexCard, "id">) => Promise<IndexCard> = (indexCardDto) => {
    return axios.post(url, indexCardDto)
        .then(response => response.data)
}

export const getAllIndexCards = () => {
    return axios.get(url)
        .then(response => response.data)
}

export const putIndexCard = (id: string, indexCardDto: Omit<IndexCard, "id">) => {
    return axios.put(url + id, indexCardDto)
        .then(response => response.data)
}

export const deleteIndexCard = (id: string) => {
    return axios.delete(url + id)
        .then(response => response.data)
}

