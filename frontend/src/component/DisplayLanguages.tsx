import {MenuItem, Select} from "@mui/material";
import {Language} from "../model/Language";

type DisplayLanguageProps = {
    languages: Language[] | undefined,
    langOrigin: string,
    langTarget: string,
    setLangOrigin: (newLanguage: string) => void,
    setLangTarget: (newLanguage: string) => void,
    updateCompatibleLanguages: () => void,
    compatibleLanguages: string[],
    getLanguageNames: (id: string) => string | undefined
}

export default function DisplayLanguages({
                                             languages,
                                             langOrigin,
                                             langTarget,
                                             setLangOrigin,
                                             setLangTarget,
                                             updateCompatibleLanguages,
                                             compatibleLanguages,
                                             getLanguageNames
                                         }: DisplayLanguageProps) {
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