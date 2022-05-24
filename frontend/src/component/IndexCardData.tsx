import {Box, Typography} from "@mui/material";
import {IndexCard} from "../model/IndexCard";

type IndexCardDataProps = {
    indexCard: IndexCard
}

export default function IndexCardData({indexCard}: IndexCardDataProps) {

    return (
        <div id={"topRow"}>
            <Box>
                <Typography>{indexCard.term1}</Typography>
            </Box>
            <Box>
                <Typography>{indexCard.term2}</Typography>
            </Box>
            <Box>
                <Typography>{indexCard.difficulty}</Typography>
            </Box>
        </div>
    )
}