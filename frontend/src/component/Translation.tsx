import {Box, Fab, MenuItem, Select, TextField} from "@mui/material";
import {useState} from "react";
import {getTranslation} from "../service/apiService";
import {toast} from "react-toastify";
import {IndexCard} from "../model/IndexCard";
import EditIndexCard from "./EditIndexCard";
import useLanguages from "../hook/useLanguages";

type TranslationProps = {
    indexCards: IndexCard[]
    addNewIndexCard: (indexCardDto: Omit<IndexCard, "id">) => void
}

export default function Translation({addNewIndexCard}: TranslationProps) {

    const {languages,
        compatibleLanguages,
        langOrigin,
        langTarget,
        setLangOrigin,
        setLangTarget,
        updateCompatibleLanguages} = useLanguages()

    const [term, setTerm] = useState<string>("")
    const [translation, setTranslation] = useState<string>("")
    const [editMode, setEditMode] = useState<boolean>(false)

    const translate = () => {
        langOrigin && langTarget && getTranslation(term, langOrigin, langTarget)
            .then((receivedTranslation) => setTranslation(receivedTranslation))
            .catch(() => toast.error("Failed to translate"))
    }

    const displayLanguages = () => {
        return (
            <Box>
                <Select>
                    {
                        languages && languages.map(language => {
                                return (
                                    <MenuItem onClick={() => {
                                        setLangOrigin(language.id)
                                        updateCompatibleLanguages()
                                    }}
                                              key={language.id}>
                                        {language.name}</MenuItem>
                                )
                            }
                        )
                    }
                </Select>
                <Select>
                    {
                        compatibleLanguages.map(id => {
                            return (
                                id && <MenuItem onClick={() => setLangTarget(id)}
                                          key={id}>
                                    {id}</MenuItem>
                            )
                        })
                    }
                </Select>
            </Box>
        )
    }

    return (
        <Box>
            {displayLanguages()}
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