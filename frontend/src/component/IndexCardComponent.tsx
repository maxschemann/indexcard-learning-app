import {IndexCard} from "../model/IndexCard";
import {Button, Card, CardContent} from "@mui/material";
import '../styles/IndexCardComponent.css';
import IndexCardData from "./IndexCardData";
import IndexCardEditForm from "./IndexCardEditForm";
import {useState} from "react";

type IndexCardProps = {
    indexCard: IndexCard
}

export default function IndexCardComponent({indexCard}: IndexCardProps) {

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
                    <IndexCardEditForm indexCard={indexCard}/>
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