import {Button, Card, CardContent, MenuItem, Select, TextField} from "@mui/material";
import {useState} from "react";
import {getTranslation} from "../service/apiService";
import {toast} from "react-toastify";
import {IndexCard} from "../model/IndexCard";
import EditIndexCard from "./EditIndexCard";
import useLanguages from "../hook/useLanguages";
import '../styles/Translation.css';
import SaveIcon from '@mui/icons-material/Save';
import SearchIcon from '@mui/icons-material/Search';

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

    const displayLanguages = () => {
        return (
            <div>
                <Select value={langOrigin}>
                    {
                        languages && languages.map(language => {
                                return (
                                    <MenuItem onClick={() => {
                                        setLangOrigin(language.id)
                                        updateCompatibleLanguages()
                                    }}
                                              key={language.id}
                                              value={language.id}>
                                        {language.name}</MenuItem>
                                )
                            }
                        )
                    }
                </Select>
                <Select value={langTarget}>
                    {
                        compatibleLanguages.map(cLanguage => {
                            return (
                                <MenuItem onClick={() => {
                                    setLangTarget(cLanguage)
                                }}
                                          key={cLanguage}
                                value={cLanguage}>
                                    {getLanguageNames(cLanguage)}
                                </MenuItem>
                            )
                        })
                    }
                </Select>
            </div>
        )
    }

    return (
        <div id={"card"}>
            <Card>
                <CardContent>
                    {displayLanguages()}
                    <div id={"translation"}>
                        <div>
                            <TextField value={term}
                                       placeholder={"Enter a word"}
                                       onChange={(event) => {
                                           setEditMode(false)
                                           setTerm(event.target.value)
                                       }}/>
                            <Button onClick={() => translate()}>
                                <SearchIcon/>
                            </Button>
                        </div>
                        <div>
                            <TextField disabled={true} value={translation}/>
                            <Button onClick={() => setEditMode(true)}>
                                <SaveIcon/>
                            </Button>
                        </div>
                        {editMode && <EditIndexCard addNewIndexCard={addNewIndexCard}
                                                    indexCardDto={{term1: term, term2: translation}}/>}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
