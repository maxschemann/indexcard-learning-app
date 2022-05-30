import {IndexCard} from "../model/IndexCard";
import {Button, Card, CardContent, ThemeProvider} from "@mui/material";
import '../styles/IndexCardComponent.css';
import IndexCardData from "./IndexCardData";
import EditIndexCard from "./EditIndexCard";
import {useState} from "react";
import {cardTheme} from "../styles/themes";
import useIndexCard from "../hook/useIndexCard";

type IndexCardProps = {
    indexCard: IndexCard
}

export default function IndexCardComponent({indexCard}: IndexCardProps) {

    const [edit, setEdit] = useState<boolean>(false)

    const {removeIndexCard} = useIndexCard()

    const switchEdit = () => {
        setEdit(!edit)
    }

    return (
        <div id={"indexCard"}>
            <ThemeProvider theme={cardTheme}>
                <Card>
                    <CardContent>
                        {indexCard && <Button onClick={() => {
                            removeIndexCard(indexCard.id)

                        }}>
                            Delete</Button>}
                        {edit ? <div>
                                <EditIndexCard indexCard={indexCard}/>
                                <Button onClick={switchEdit}>Edit</Button>
                            </div>
                            : <div>
                                <IndexCardData indexCard={indexCard} gameMode={false}/>
                                <Button onClick={switchEdit}>Edit</Button>
                            </div>}
                    </CardContent>
                </Card>
            </ThemeProvider>
        </div>
    )
}