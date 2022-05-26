import {Button, Card, CardContent, Fab, TextField, ThemeProvider} from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import AddIcon from "@mui/icons-material/Add";
import {FormEvent, useState} from "react";
import {toast} from "react-toastify";
import {Difficulty, IndexCard} from "../model/IndexCard";
import useIndexCard from "../hook/useIndexCard";
import {cardTheme} from "../styles/themes";
import '../styles/EditIndexCard.css';
import {deleteIndexCard} from "../service/apiService";

type IndexCardFormProps = {
    indexCard?: IndexCard
}

export default function EditIndexCard({indexCard}: IndexCardFormProps) {

    const [term1, setTerm1] = useState(indexCard ? indexCard.term1 : "")
    const [term2, setTerm2] = useState(indexCard ? indexCard.term2 : "")
    const [difficulty, setDifficulty] = useState<Difficulty>(indexCard ? indexCard.difficulty : Difficulty.HARD)

    const {addNewIndexCard, updateIndexCard} = useIndexCard()

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
        if (!indexCard) {
            const newIndexCardDto = createNewIndexCardDto()
            addNewIndexCard(newIndexCardDto)
        } else {
            const newIndexCardDto = createNewIndexCardDto()
            updateIndexCard(indexCard.id, newIndexCardDto)
        }
    }

    const createNewIndexCardDto = () => {
        return {
            term1: term1,
            term2: term2,
            difficulty: difficulty
        }
    }

    const updateTerm = (option: 1 | 2, term: string) => {
        option === 1 ? setTerm1(term) : setTerm2(term)
    }

    const selectDifficulty = (difficultyOption: number) => {
        setDifficulty(difficultyOption)
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
                                {indexCard && <Button onClick={()=>deleteIndexCard(indexCard.id)}>Delete</Button>}
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </ThemeProvider>
        </div>
    )
}