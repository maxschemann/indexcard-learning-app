import {Button, Fab, TextField} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {FormEvent, useState} from "react";
import {toast} from "react-toastify";
import {Difficulty, IndexCard} from "../model/IndexCard";
import '../styles/EditIndexCard.css';
import ChangeDifficulty from "./ChangeDifficulty";

type EditIndexCardProps = {
    indexCard?: IndexCard,
    indexCardDto?: Omit<IndexCard, "id" | "difficulty">,
    addNewIndexCard: (indexCard: Omit<IndexCard, "id">) => void,
    updateIndexCard?: (id: string, indexCard: Omit<IndexCard, "id">) => void,
    removeIndexCard?: (id: string) => void,
    submitOptions?: {
        multipleAdd: boolean,
        submitEffect?: (args: any) => any
    }
}

export default function EditIndexCard({
                                          indexCard,
                                          indexCardDto,
                                          addNewIndexCard,
                                          updateIndexCard,
                                          removeIndexCard,
                                          submitOptions,
                                      }: EditIndexCardProps) {

    const [term1, setTerm1] = useState(() => {
        if (indexCard) return indexCard.term1
        if (indexCardDto) return indexCardDto.term1
        else return undefined
    })

    const [term2, setTerm2] = useState(() => {
        if (indexCard) return indexCard.term2
        if (indexCardDto) return indexCardDto.term2
        else return undefined
    })

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
        if (!indexCard && term1 && term2) {
            const newIndexCardDto = createNewIndexCardDto()
            newIndexCardDto && addNewIndexCard(newIndexCardDto)
        } else {
            const newIndexCardDto: Omit<IndexCard, "id"> | undefined = createNewIndexCardDto()
            if (newIndexCardDto && updateIndexCard && indexCard) updateIndexCard(indexCard.id, newIndexCardDto)
        }
    }

    const createNewIndexCardDto = () => {
        if (term1 && term2) return {
            term1: term1,
            term2: term2,
            difficulty: difficulty,
        }
    }

    const updateTerm = (option: 1 | 2, term: string) => {
        option === 1 ? setTerm1(term) : setTerm2(term)
    }

    return (<div id={"editIndexCard"}>
            {removeIndexCard && indexCard && <Button onClick={() => {
                removeIndexCard(indexCard.id)
            }}>
                Delete</Button>}
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
                    <Fab type={"submit"}
                         onClick={() => submitOptions && submitOptions.submitEffect}>
                        <AddIcon/>
                    </Fab>
                </div>
            </form>
        </div>
    )
}
