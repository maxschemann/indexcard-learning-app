import {getLanguages} from "../service/apiService";
import {useEffect, useState} from "react";
import {Language} from "../model/Language";

export default function useLanguages() {

    const [languages, setLanguages] = useState<Language[]>()

    const [langOrigin, setLangOrigin] = useState<string>("en")
    const [langTarget, setLangTarget] = useState<string>("de")

    const [compatibleLanguages, setCompatibleLanguages] = useState<string[]>([])

    const updateCompatibleLanguages = () => {
        languages && setCompatibleLanguages(() => {
            return languages.flatMap(language => {
                if (language.id === langOrigin) return language.compatibleLanguages
                else return []
            })
        })
    }

    const getLanguageName = (id: string) => {
        let foundLanguage = languages && languages.find(l => l.id === id)
        return foundLanguage && foundLanguage.name
    }

    useEffect(() => {
        getLanguages().then(value => setLanguages(value))
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        updateCompatibleLanguages()
        // eslint-disable-next-line
    }, [langOrigin, languages])

    return {
        languages,
        langOrigin,
        langTarget,
        setLangOrigin,
        setLangTarget,
        compatibleLanguages,
        updateCompatibleLanguages,
        getLanguageNames: getLanguageName
    }
}
