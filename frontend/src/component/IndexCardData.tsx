import {TextField} from "@mui/material";
import {IndexCard} from "../model/IndexCard";
import '../styles/IndexCardData.css'

type IndexCardDataProps = {
    indexCard: IndexCard,
    gameMode: boolean,
    translation?: string,
    setTranslation?: (updatedTranslation: string) => void
}

export default function IndexCardData({
                                          indexCard,
                                          gameMode,
                                          translation,
                                          setTranslation,
                                      }: IndexCardDataProps) {

    return (
            <div id={"textFields"}>
                <TextField disabled={true} value={indexCard.term1}/>
                <TextField disabled={!gameMode}
                           value={!gameMode ? indexCard.term2 : translation}
                           placeholder={"Enter the translation..."}
                           onChange={(event) => setTranslation && setTranslation(event.target.value)}>
                </TextField>
            </div>
    )
}
