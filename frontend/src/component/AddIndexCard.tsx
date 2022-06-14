import {Card, CardContent} from "@mui/material";
import EditIndexCard from "./EditIndexCard";
import {IndexCard} from "../model/IndexCard";
import '../styles/AddIndexCard.css';

type AddIndexCardProps = {
    addNewIndexCard: (indexCard: Omit<IndexCard, "id">) => void
}

export default function AddIndexCard({addNewIndexCard}: AddIndexCardProps) {
    return (
        <div id={"card"}>
                <Card>
                    <CardContent>
                        <EditIndexCard addNewIndexCard={addNewIndexCard}/>
                    </CardContent>
                </Card>
        </div>
    )
}