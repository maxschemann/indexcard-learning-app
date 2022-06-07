import {Button, Drawer, Fab, ThemeProvider} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from "react-router-dom";
import SortIndexCards from "./SortIndexCards";
import SearchIndexCard from "./SearchIndexCard";
import React, {useState} from "react";
import {IndexCard} from "../model/IndexCard";
import {headerTheme} from "../styles/headerTheme";
import Box from "@mui/material/Box";
import '../styles/Header.css';

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

    const paths = ["", "/", "/add", "/game", "/translate"]

    const createMenuItems = () => {
        return paths.map(path => {
            let buttonFunction = pickButtonFunction(path)
            let name = getName(path)
            return name && createButton(path, name, buttonFunction)
        })
    }

    const createButton = (path: string, name: string | JSX.Element, buttonFunction: () => void) => {
        return (
            <Button onClick={() => {
                navigate(path)
                setDisplayMenu(false)
                buttonFunction()
            }}
                    key={path}>
                {name}
            </Button>
        )
    }

    const pickButtonFunction = (path: string) => {
        if (path === "/") return () => setDisplaySorting(true)
        if (path === "") return () => {
            setDisplayMenu(false)
            setDisplaySorting(true)
        }
        else return () => setDisplaySorting(false)
    }

    const getName = (path: string) => {
        if (path === "") return <MenuIcon/>
        if (path === "/") return "Overview"
        if (path === "/add") return "Add new index card"
        if (path === "/game") return "Practice"
        if (path === "/translate") return "Translate"
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
                        <Drawer anchor={'top'}
                                open={displayMenu}
                                onClose={() => setDisplayMenu(false)}>
                            {createMenuItems()}
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
