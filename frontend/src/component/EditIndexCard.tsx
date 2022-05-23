import {Button, Card, CardContent, Fab, TextField, ThemeProvider} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import {FormEvent, useState} from "react";
import {Difficulty, IndexCard} from "../model/IndexCard";
import {toast} from "react-toastify";
import '../styles/EditIndexCardComponent.css'
import {cardTheme} from "../styles/themes";
import ButtonGroup from '@mui/material/ButtonGroup';
import useIndexCard from "../hook/useIndexCard";

type EditIndexCardProps = {
    indexCard?: IndexCard
}

export default function EditIndexCard({indexCard}: EditIndexCardProps) {

    const [term1, setTerm1] = useState(indexCard ? indexCard.term1 : "")
    const [term2, setTerm2] = useState(indexCard ? indexCard.term2 : "")
    const [difficulty, setDifficulty] = useState<Difficulty>(indexCard ? indexCard.difficulty : Difficulty.HARD)

    const {addNewIndexCard} = useIndexCard()

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
            difficulty: difficulty
        }
        addNewIndexCard(newIndexCard)
    }

    const updateTerm = (option: 1 | 2, term: string) => {
        option === 1 ? setTerm1(term) : setTerm2(term)
    }

    const selectDifficulty = (difficulty: number) => {
        setDifficulty(difficulty)
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
                            </div>
                            <div id={"bottomRow"}>
                                <ButtonGroup>
                                    <Button sx={{backgroundColor: '#07bc0c'}}
                                            onClick={() => selectDifficulty(0)}>
                                        <SentimentSatisfiedAltIcon/>
                                    </Button>
                                    <Button sx={{backgroundColor: '#f1c40f'}}
                                            onClick={() => selectDifficulty(1)}>
                                        <SentimentSatisfiedIcon/>
                                    </Button>
                                    <Button sx={{backgroundColor: '#e74c3c'}}
                                            onClick={() => selectDifficulty(2)}>
                                        <SentimentDissatisfiedIcon/>
                                    </Button>
                                </ButtonGroup>
                                <Fab type={"submit"}>
                                    <AddIcon/>
                                </Fab>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </ThemeProvider>
        </div>
    );
}