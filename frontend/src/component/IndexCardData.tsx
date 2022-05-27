import {Box, Container, TextField, Typography} from "@mui/material";
import {IndexCard} from "../model/IndexCard";

type IndexCardDataProps = {
    indexCard: IndexCard
}

export default function IndexCardData({indexCard}: IndexCardDataProps) {

    return (
        <Container>
            <Box>
                <TextField disabled={true} value={indexCard.term1}/>
                <TextField disabled={true} value={indexCard.term2}/>
            </Box>
            <Box padding={"10px"}>
                <Typography>{indexCard.difficulty}</Typography>
            </Box>
        </Container>
    )
}