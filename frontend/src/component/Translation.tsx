import {Button, Card, CardContent, TextField, Tooltip} from "@mui/material";
import {useState} from "react";
import {getTranslation} from "../service/apiService";
import {toast} from "react-toastify";
import {IndexCard} from "../model/IndexCard";
import EditIndexCard from "./EditIndexCard";
import useLanguages from "../hook/useLanguages";
import '../styles/Translation.css';
import SaveIcon from '@mui/icons-material/Save';
import SearchIcon from '@mui/icons-material/Search';
import DisplayLanguages from "./DisplayLanguages";

type TranslationProps = {
    indexCards: IndexCard[]
    addNewIndexCard: (indexCardDto: Omit<IndexCard, "id">) => void
}

export default function Translation({addNewIndexCard}: TranslationProps) {

    const {
        languages,
        compatibleLanguages,
        langOrigin,
        langTarget,
        setLangOrigin,
        setLangTarget,
        updateCompatibleLanguages,
        getLanguageNames,
    } = useLanguages()

    const [term, setTerm] = useState<string>("")
    const [translation, setTranslation] = useState<string>("")
    const [editMode, setEditMode] = useState<boolean>(false)

    const translate = () => {
        langOrigin && langTarget && getTranslation(term, langOrigin, langTarget)
            .then((receivedTranslation) => setTranslation(receivedTranslation))
            .catch(() => toast.error("Failed to translate"))
    }

    return (
        <div id={"card"}>
            <Card>
                <CardContent>
                    <DisplayLanguages languages={languages}
                                      compatibleLanguages={compatibleLanguages}
                                      updateCompatibleLanguages={updateCompatibleLanguages}
                                      langOrigin={langOrigin}
                                      setLangOrigin={setLangOrigin}
                                      langTarget={langTarget}
                                      setLangTarget={setLangTarget}
                                      getLanguageNames={getLanguageNames}/>
                    <div id={"translation"}>
                        <div>
                            <TextField value={term}
                                       placeholder={"Enter a word"}
                                       onChange={(event) => {
                                           setEditMode(false)
                                           setTerm(event.target.value)
                                       }}/>
                            <Tooltip title={"Translate"}>
                                <Button onClick={() => translate()}>
                                    <SearchIcon/>
                                </Button>
                            </Tooltip>
                        </div>
                        <div>
                            <TextField disabled={true} value={translation}/>
                            <Tooltip title={"Save"}>
                                <Button onClick={() => setEditMode(true)}>
                                    <SaveIcon/>
                                </Button>
                            </Tooltip>
                        </div>
                        {editMode && <EditIndexCard addNewIndexCard={addNewIndexCard}
                                                    indexCardDto={{term1: term, term2: translation}}/>}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
