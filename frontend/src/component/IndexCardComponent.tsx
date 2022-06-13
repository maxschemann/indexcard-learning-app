import {IndexCard} from "../model/IndexCard";
import {Button, Card, CardContent} from "@mui/material";
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
                        <Button onClick={() => setEdit(!edit)}>
                            <EditIcon/>
                        </Button>
                        </div>
                    </CardContent>
                </Card>
        </div>
    )
}