import {Difficulty, IndexCard} from "../model/IndexCard";
import {Button, Card, CardContent, Chip, Tooltip} from "@mui/material";
import '../styles/IndexCardComponent.css';
import IndexCardData from "./IndexCardData";
import EditIndexCard from "./EditIndexCard";
import {useState} from "react";
import EditIcon from '@mui/icons-material/Edit';

type IndexCardProps = {
    indexCard: IndexCard
    removeIndexCard: (id: string) => void
    addNewIndexCard: (indexCard: Omit<IndexCard, "id">) => void,
    updateIndexCard: (id: string, indexCard: Omit<IndexCard, "id">) => void
}

export default function IndexCardComponent({
                                               indexCard,
                                               removeIndexCard,
                                               addNewIndexCard,
                                               updateIndexCard
                                           }: IndexCardProps) {

    const [edit, setEdit] = useState<boolean>(false)

    const displayDifficulty = () => {
        if (indexCard.difficulty.toString() === Difficulty[Difficulty.EASY]) {
            return (
                <Chip label={indexCard.difficulty} color={"success"}/>
            )
        }
        if (indexCard.difficulty.toString() === Difficulty[Difficulty.MEDIUM]) {
            return (
                <Chip label={indexCard.difficulty} color={"warning"}/>
            )
        }
        if (indexCard.difficulty.toString() === Difficulty[Difficulty.HARD]) {
            return (
                <Chip label={indexCard.difficulty} color={"error"}/>
            )
        }
    }

    return (
        <div id={"indexCard"}>
            <Card>
                <CardContent>
                    <div id={"card"}>
                        {edit ? <div>
                                <EditIndexCard indexCard={indexCard}
                                               addNewIndexCard={addNewIndexCard}
                                               updateIndexCard={updateIndexCard}
                                               removeIndexCard={removeIndexCard}
                                />
                            </div>
                            : <div>
                                <IndexCardData indexCard={indexCard}
                                               gameMode={false}/>
                            </div>}
                        <div id={"editButton"}>
                            <Tooltip title="Edit">
                                <Button onClick={() => setEdit(!edit)}
                                        sx={{height: "50px"}}>
                                    <EditIcon/>
                                </Button>
                            </Tooltip>
                        </div>
                        <div id={"difficulty"}>
                            {displayDifficulty()}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}