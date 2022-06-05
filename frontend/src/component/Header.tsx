import '../styles/Header.css'
import {Button, Drawer, Fab} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from "react-router-dom";
import SortIndexCards from "./SortIndexCards";
import SearchIndexCard from "./SearchIndexCard";
import React, {useState} from "react";
import {IndexCard} from "../model/IndexCard";

type HeaderProps = {
    setIndexCards: (indexCards: IndexCard[]) => void
}

export default function Header({setIndexCards}: HeaderProps) {

    const [displayMenu, setDisplayMenu] = useState<boolean>(false)

    const [displaySorting, setDisplaySorting] = useState<boolean>(true)

    const navigate = useNavigate()

    return <div id={"header"}>
        <Fab onClick={() => setDisplayMenu(!displayMenu)}><MenuIcon/></Fab>
        {
            displayMenu &&
            (<div>
                <Drawer anchor={'top'} open={displayMenu} onClose={() => setDisplayMenu(false)}>
                    <Button onClick={() => setDisplayMenu(false)}><MenuIcon/></Button>
                    <Button onClick={() => {
                        setDisplaySorting(true)
                        navigate("/")
                    }}>Overview</Button>
                    <Button onClick={() => {
                        setDisplaySorting(false)
                        navigate("/add")
                    }}>Add</Button>
                    <SearchIndexCard setIndexCards={setIndexCards}/>
                    <Button onClick={() => {
                        setDisplaySorting(false)
                        navigate("/game")
                    }}>Game</Button>
                </Drawer>
            </div>)
        }
        {
            displaySorting && <SortIndexCards setIndexCards={setIndexCards}/>
        }
    </div>
}