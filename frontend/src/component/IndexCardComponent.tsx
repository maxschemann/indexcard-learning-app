import {IndexCard} from "../model/IndexCard";
import {Box, Card, CardContent, Fab, Typography} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import '../styles/IndexCardComponent.css';
import {Route, Routes } from "react-router-dom";
import EditIndexCard from "./EditIndexCard";

type IndexCardProps = {
    indexCard: IndexCard
}
export default function IndexCardComponent({indexCard}: IndexCardProps) {

    return (
        <div id={"indexCard"}>
            <Card>
                <CardContent>
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
                        <Fab><EditIcon/></Fab>
                    </div>
                    <Routes>
                        <Route path="/edit"
                               element={
                            <EditIndexCard indexCard={indexCard}/>
                        }/>
                    </Routes>
                </CardContent>
            </Card>
        </div>
    )
}