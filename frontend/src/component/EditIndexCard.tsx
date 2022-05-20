import {Card, CardContent, Fab, TextField, ThemeProvider} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import {FormEvent, useState} from "react";
import {IndexCard} from "../model/IndexCard";
import {toast} from "react-toastify";
import '../stylesheets/EditIndexCard.css'
import {cardTheme} from "../stylesheets/themes";

type EditIndexCardProps = {
    addNewIndexCard: (newIndexCard: Omit<IndexCard, "id">) => void
}

export default function EditIndexCard({addNewIndexCard}: EditIndexCardProps) {

    const [term1, setTerm1] = useState("")
    const [term2, setTerm2] = useState("")

    function updateTerm(option: 1 | 2, term: string) {
        option === 1 ? setTerm1(term) : setTerm2(term)
    }

    const submitIndexCard = (event: FormEvent) => {
        event.preventDefault()
        if (!term1) {
            toast.warn("Please enter a word")
            return
        }
        if (!term2) {
            toast.warn("Please enter a translation")
            return
        }
        const newIndexCard: Omit<IndexCard, "id"> = {
            term1: term1,
            term2: term2,
        }
        addNewIndexCard(newIndexCard)
    }

    return (<div id={"editIndexCard"}>
            <ThemeProvider theme={cardTheme}>
                <Card>
                    <CardContent>
                        <form onSubmit={submitIndexCard}>
                            <div id={"topRow"}>
                                <TextField value={term1}
                                           placeholder={"Enter a word..."}
                                           onChange={event => updateTerm(1, event.target.value)}/>
                                <TextField value={term2}
                                           placeholder={"Enter a translation.."}
                                           onChange={event => updateTerm(2, event.target.value)}/>
                                <Fab type={"submit"}>
                                    <AddIcon/>
                                </Fab>
                            </div>
                            <div id={"bottomRow"}>
                                <Fab sx={{backgroundColor: '#07bc0c'}}>
                                    <SentimentSatisfiedAltIcon/>
                                </Fab>
                                <Fab sx={{backgroundColor: '#f1c40f'}}>
                                    <SentimentSatisfiedIcon/>
                                </Fab>
                                <Fab sx={{backgroundColor: '#e74c3c'}}>
                                    <SentimentDissatisfiedIcon/>
                                </Fab>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </ThemeProvider>
        </div>
    );
}