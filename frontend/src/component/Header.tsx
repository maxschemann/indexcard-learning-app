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

    const createMenuItems = () => {
        return ["", "/", "/add", "/game"].map(path => {
            let name = getIcon(path)
            return name && createButton(path, name)
        })
    }

    const createButton = (path: string, name: string | JSX.Element) => {
        return (
            <Button onClick={() => {
                setDisplayMenu(false)
                navigate(path)
                if (path === "/") setDisplaySorting(true)
                if (path === "") setDisplayMenu(false)
                else setDisplaySorting(false)
            }}
                    key={path}>
                {name}</Button>
        )
    }

    const getIcon = (path: string) => {
        if (path === "") return <MenuIcon/>
        if (path === "/") return "Overview"
        if (path === "/add") return "Add new index card"
        if (path === "/game") return "Practice"
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
