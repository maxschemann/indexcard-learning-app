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

    useEffect(() => {
        getLanguages().then(value => setLanguages(value))
        // eslint-disable-next-line
    }, [])

    return {
        languages,
        langOrigin,
        langTarget,
        setLangOrigin,
        setLangTarget,
        compatibleLanguages,
        updateCompatibleLanguages
    }
}