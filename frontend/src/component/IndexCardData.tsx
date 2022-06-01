import {Box, Container,TextField, Typography} from "@mui/material";
import {IndexCard} from "../model/IndexCard";

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
        <Container>
                <TextField disabled={true} value={indexCard.term1}/>
                <TextField disabled={!gameMode}
                           value={!gameMode ? indexCard.term2 : translation}
                           placeholder={"Enter the translation..."}
                           onChange={(event) => setTranslation && setTranslation(event.target.value)}>
                </TextField>
            <Box padding={"10px"}>
                <Typography>{indexCard.difficulty}</Typography>
            </Box>
        </Container>
    )
}