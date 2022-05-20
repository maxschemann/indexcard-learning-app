import {Icon, IconButton, TextField} from "@mui/material";
import {FormEvent, useState} from "react";
import {IndexCard} from "../model/IndexCard";
import {toast} from "react-toastify";

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
        if (!term1 || !term2) {
            toast.error("Enter a value")
            return
        }
        const newIndexCard: Omit<IndexCard, "id"> = {
            term1: term1,
            term2: term2,
        }
        addNewIndexCard(newIndexCard)
    }

    return <div>
        <form onSubmit={submitIndexCard}>
            <TextField label={"Origin"}
                       variant={"outlined"}
                       value={term1}
                       placeholder={"Enter a word..."}
                       multiline
                       onChange={event => updateTerm(1, event.target.value)}/>
            <TextField label={"Target"}
                       variant={"outlined"}
                       value={term2}
                       placeholder={"Enter a translation.."}
                       multiline
                       onChange={event => updateTerm(2, event.target.value)}/>
            <IconButton type={"submit"}>
                <Icon>add_circle</Icon>
            </IconButton>
        </form>
    </div>
}