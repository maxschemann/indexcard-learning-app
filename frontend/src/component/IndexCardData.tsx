import {Box, Container, TextField, Typography} from "@mui/material";
import {IndexCard} from "../model/IndexCard";

type IndexCardDataProps = {
    indexCard: IndexCard,
    gameMode: boolean
}

export default function IndexCardData({indexCard, gameMode}: IndexCardDataProps) {

    const renderTextFields = () => {
        return (
            <Box>
                <TextField disabled={true} value={indexCard.term1}/>
                <TextField disabled={!gameMode} value={!gameMode ? indexCard.term2 : "Enter the translation..."}/>
            </Box>
        )
    }

    return (
        <Container>
            {renderTextFields()}
            <Box padding={"10px"}>
                <Typography>{indexCard.difficulty}</Typography>
            </Box>
        </Container>
    )
}