import {IndexCard} from "../model/IndexCard";
import {Button, Card, CardContent} from "@mui/material";
import '../styles/IndexCardComponent.css';
import IndexCardData from "./IndexCardData";
import IndexCardForm from "./IndexCardForm";
import {useState} from "react";

type IndexCardProps = {
    indexCard: IndexCard
    addNewIndexCard: (newIndexCard: Omit<IndexCard, "id">) => void
    updateIndexCard: (indexCard: IndexCard) => void
}
export default function IndexCardComponent({indexCard, addNewIndexCard, updateIndexCard}: IndexCardProps) {

    const [edit, setEdit] = useState<boolean>(false)

    const switchEdit = () => {
        setEdit(!edit)
    }

    const renderedComponent = () => {
        if (!edit) {
            return (<div>
                <IndexCardData indexCard={indexCard}/>
                <Button onClick={switchEdit}>Edit</Button>
            </div>)
        } else {
            return (
                <div>
                    <IndexCardForm indexCard={indexCard} addNewIndexCard={addNewIndexCard} updateIndexCard={updateIndexCard}/>
                    <Button onClick={switchEdit}>Edit</Button>
                </div>
            )
        }
    }

    return (<Card>
        <CardContent>
            {renderedComponent()}
        </CardContent>
    </Card>)
}