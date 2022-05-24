import {IndexCard} from "../model/IndexCard";
import {Button, Card, CardContent} from "@mui/material";
import '../styles/IndexCardComponent.css';
import IndexCardData from "./IndexCardData";
import EditIndexCard from "./EditIndexCard";
import {useState} from "react";

type IndexCardProps = {
    indexCard: IndexCard
}

export default function IndexCardComponent({indexCard}: IndexCardProps) {

    const [edit, setEdit] = useState<boolean>(false)

    const switchEdit = () => {
        setEdit(!edit)
    }

    return (<Card>
        <CardContent>
            {edit ? <div>
            <EditIndexCard indexCard={indexCard}/>
            <Button onClick={switchEdit}>Edit</Button>
        </div>
            : <div>
            <IndexCardData indexCard={indexCard}/>
            <Button onClick={switchEdit}>Edit</Button>
        </div>}
        </CardContent>
    </Card>)
}