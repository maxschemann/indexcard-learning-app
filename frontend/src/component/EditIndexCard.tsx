import {Card, CardContent, Fab, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import {FormEvent, useState} from "react";
import {IndexCard} from "../model/IndexCard";
import {toast} from "react-toastify";
import '../stylesheets/EditIndexCard.css'

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

    return <div id={"editIndexCard"}>
        <Card>
            <CardContent>
                <form onSubmit={submitIndexCard}>
                    <div id={"topRow"}>
                        <TextField label={"Origin"}
                                   variant={"outlined"}
                                   value={term1}
                                   placeholder={"Enter a word..."}
                                   multiline
                                   sx={{padding: '5px'}}
                                   onChange={event => updateTerm(1, event.target.value)}/>
                        <TextField label={"Target"}
                                   variant={"outlined"}
                                   value={term2}
                                   placeholder={"Enter a translation.."}
                                   multiline
                                   sx={{padding: '5px'}}
                                   onChange={event => updateTerm(2, event.target.value)}/>
                        <Fab type={"submit"}
                            size={"small"}
                            sx={{marginTop: '10px',
                                marginLeft:'5px'}}>
                            <AddIcon/>
                        </Fab>
                    </div>
                    <div id={"bottomRow"}>
                    <Fab size={"medium"}
                         sx={{margin: '10px',
                             backgroundColor: '#07bc0c'}}>
                        <SentimentSatisfiedAltIcon/>
                    </Fab>
                    <Fab size={"medium"}
                         sx={{margin: '10px',
                             backgroundColor: '#f1c40f'}}>
                        <SentimentSatisfiedIcon/>
                    </Fab>
                    <Fab size={"medium"}
                         sx={{margin: '10px',
                             backgroundColor: '#e74c3c'}}>
                        <SentimentDissatisfiedIcon/>
                    </Fab>
                    </div>
                </form>
            </CardContent>
        </Card>
    </div>
}