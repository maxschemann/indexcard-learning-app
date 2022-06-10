import {IndexCard} from "../model/IndexCard";
import axios from "axios";
import {Language} from "../model/Language";

const url = "/api/index-card/"

export const postIndexCard: (indexCardDto: Omit<IndexCard, "id">) => Promise<IndexCard> = (indexCardDto) => {
    return axios.post(url, indexCardDto)
        .then(response => response.data)
}

export const getAllIndexCards: () => Promise<IndexCard[]> = () => {
    return axios.get(url)
        .then(response => response.data)
}

export const putIndexCard = (id: string, indexCardDto: Omit<IndexCard, "id">) => {
    return axios.put(url + id, indexCardDto)
        .then(response => response.data)
}

export const deleteIndexCard: (id: string) => Promise<void> = (id) => {
    return axios.delete(url + id)
}

export const getTranslation = (term: string, langOrigin: string, langTarget: string) => {
    return axios.get("/api/translation/"+langOrigin+"/"+langTarget+"/"+term)
        .then(response => response.data)
}

export const getLanguages: () => Promise<Language[]> = () => {
    return axios.get("/api/translation/")
        .then(response => response.data)
}

