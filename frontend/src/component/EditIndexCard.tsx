import {Fab, TextField} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {FormEvent, useState} from "react";
import {toast} from "react-toastify";
import {Difficulty, IndexCard} from "../model/IndexCard";
import '../styles/EditIndexCard.css';
import ChangeDifficulty from "./ChangeDifficulty";

type IndexCardFormProps = {
    indexCard?: IndexCard,
    addNewIndexCard: (indexCard: Omit <IndexCard, "id">) => void,
    updateIndexCard?: (id: string, indexCard: Omit<IndexCard, "id">) => void
}

export default function EditIndexCard({indexCard, addNewIndexCard, updateIndexCard}: IndexCardFormProps) {

    const [term1, setTerm1] = useState(indexCard ? indexCard.term1 : "")
    const [term2, setTerm2] = useState(indexCard ? indexCard.term2 : "")
    const [difficulty, setDifficulty] = useState<Difficulty>(indexCard ? indexCard.difficulty : Difficulty.HARD)

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
            updateIndexCard && updateIndexCard(indexCard.id, newIndexCardDto)
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

    return (<div id={"editIndexCard"}>
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
                                <ChangeDifficulty setDifficulty={setDifficulty}/>
                                <Fab type={"submit"}>
                                    <AddIcon/>
                                </Fab>
                            </div>
                        </form>
        </div>
    )
}