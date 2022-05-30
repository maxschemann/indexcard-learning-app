import {Box, Container, TextField, Typography} from "@mui/material";
import {IndexCard} from "../model/IndexCard";

type IndexCardDataProps = {
    indexCard: IndexCard,
    gameMode: boolean
}

export default function IndexCardData({indexCard, gameMode}: IndexCardDataProps) {

    return (
        <Container>
            <Box>
                <TextField disabled={true} value={indexCard.term1}/>
                <TextField disabled={!gameMode} value={!gameMode ? indexCard.term2 : "Enter the translation..."}/>
            </Box>
            <Box padding={"10px"}>
                <Typography>{indexCard.difficulty}</Typography>
            </Box>
        </Container>
    )
}