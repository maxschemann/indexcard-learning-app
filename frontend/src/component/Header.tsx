import {Button, Drawer, Fab, ThemeProvider} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from "react-router-dom";
import SortIndexCards from "./SortIndexCards";
import SearchIndexCard from "./SearchIndexCard";
import React, {useState} from "react";
import {IndexCard} from "../model/IndexCard";
import {headerTheme} from "../styles/headerTheme";
import Box from "@mui/material/Box";
import '../styles/Header.css'

type HeaderProps = {
    setIndexCards: (indexCards: IndexCard[]) => void
}

export default function Header({setIndexCards}: HeaderProps) {

    const [displayMenu, setDisplayMenu] = useState<boolean>(false)

    const [displaySorting, setDisplaySorting] = useState<boolean>(true)

    const navigate = useNavigate()

    const backgroundLight = {
        backgroundColor: headerTheme.palette.primary.light
    }
    return (
        <ThemeProvider theme={headerTheme}>
            <div id={'header'}>
                <Box id={'menu'}>
                    <Fab onClick={() => setDisplayMenu(!displayMenu)}
                         sx={backgroundLight}><MenuIcon/></Fab>
                </Box>
                {
                    displayMenu &&
                    (<Box>
                        <Drawer anchor={'top'} open={displayMenu} onClose={() => setDisplayMenu(false)}>
                            <Button onClick={() => setDisplayMenu(false)}>
                                <MenuIcon/></Button>
                            <Button onClick={() => {
                                setDisplaySorting(true)
                                navigate("/")
                            }}>
                                Overview</Button>
                            <Button onClick={() => {
                                setDisplaySorting(false)
                                navigate("/add")
                            }}>
                                Add</Button>
                            <Button onClick={() => {
                                setDisplaySorting(false)
                                navigate("/game")
                            }}>
                                Game</Button>
                        </Drawer>
                    </Box>)
                }
                <Box id={"options"}>
                    {
                        displaySorting && <SortIndexCards setIndexCards={setIndexCards}/>
                    }
                    {
                        displaySorting && <SearchIndexCard setIndexCards={setIndexCards}/>
                    }
                </Box>
            </div>
        </ThemeProvider>
    )
}