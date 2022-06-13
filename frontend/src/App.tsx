import React from 'react';
import './styles/App.css';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Header from "./component/Header";
import IndexCardOverview from "./component/IndexCardOverview";
import {Route, Routes} from 'react-router-dom';
import useIndexCard from "./hook/useIndexCard";
import GameOptions from "./component/GameOptions";
import Translation from "./component/Translation";
import AddIndexCard from "./component/AddIndexCard";
import {ThemeProvider} from "@mui/material";
import {cardTheme} from "./styles/cardTheme";

function App() {

    const {indexCards, setIndexCards, addNewIndexCard, updateIndexCard, removeIndexCard} = useIndexCard()

    return (
        <div id={"app"}>
            <Header setIndexCards={setIndexCards}/>
            <ToastContainer/>
            <div id={"mainView"}>
                <ThemeProvider theme={cardTheme}>
                <Routes>
                    <Route path="/"
                           element={<IndexCardOverview indexCards={indexCards}
                                                       removeIndexCard={removeIndexCard}
                                                       addNewIndexCard={addNewIndexCard}
                                                       updateIndexCard={updateIndexCard}
                           />}/>
                    <Route path="/add"
                           element={<AddIndexCard addNewIndexCard={addNewIndexCard}/>}/>
                    <Route path="/game"
                           element={<GameOptions indexCards={indexCards}
                                                 setIndexCards={setIndexCards}
                                                 updateIndexCard={updateIndexCard}/>}/>
                    <Route path="/translate"
                           element={<Translation addNewIndexCard={addNewIndexCard}
                                                 indexCards={indexCards}/>}/>
                </Routes>
                </ThemeProvider>
            </div>
        </div>
    );
}

export default App;
