import {IndexCard} from "../model/IndexCard";
import {Button, Card, CardContent, ThemeProvider} from "@mui/material";
import '../styles/IndexCardComponent.css';
import IndexCardData from "./IndexCardData";
import EditIndexCard from "./EditIndexCard";
import {useState} from "react";
import {cardTheme} from "../styles/themes";

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

    const switchEdit = () => {
        setEdit(!edit)
    }

    return (
        <div id={"indexCard"}>
            <ThemeProvider theme={cardTheme}>
                <Card>
                    <CardContent>
                        {edit ? <div>
                                <EditIndexCard indexCard={indexCard}
                                               addNewIndexCard={addNewIndexCard}
                                               updateIndexCard={updateIndexCard}
                                               removeIndexCard={removeIndexCard}
                                />
                                <Button onClick={switchEdit}>Edit</Button>
                            </div>
                            : <div>
                                <IndexCardData indexCard={indexCard}
                                               gameMode={false}/>
                                <Button onClick={switchEdit}>Edit</Button>
                            </div>}
                    </CardContent>
                </Card>
            </ThemeProvider>
        </div>
    )
}