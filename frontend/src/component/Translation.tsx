import {Box, Fab, TextField} from "@mui/material";
import {useState} from "react";
import {getTranslation} from "../service/apiService";
import {toast} from "react-toastify";
import {IndexCard} from "../model/IndexCard";
import EditIndexCard from "./EditIndexCard";

type TranslationProps = {
    indexCards: IndexCard[]
    addNewIndexCard: (indexCardDto: Omit<IndexCard, "id">) => void
}

export default function Translation({addNewIndexCard}: TranslationProps) {

    const [term, setTerm] = useState<string>("")
    const [translation, setTranslation] = useState<string>("")
    const [editMode, setEditMode] = useState<boolean>(false)

    const translate = () => {
        getTranslation(term).then((receivedTranslation) => setTranslation(receivedTranslation))
            .catch(() => toast.error("Failed to translate"))
    }

    return (
        <Box>
            <TextField value={term}
                       placeholder={"Enter a word"}
                       onChange={(event) => {
                           setEditMode(false)
                           setTerm(event.target.value)
                       }}/>
            <TextField disabled={true} value={translation}/>
            <Fab onClick={() => translate()}>Translate</Fab>
            <Fab onClick={() => setEditMode(true)}>Save</Fab>
            {editMode && <EditIndexCard addNewIndexCard={addNewIndexCard}
            indexCardDto={{term1: term, term2: translation}}/>}
        </Box>
    )
}