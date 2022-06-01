import React from 'react';
import './styles/App.css';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Header from "./component/Header";
import IndexCardOverview from "./component/IndexCardOverview";
import {Route, Routes} from 'react-router-dom';
import EditIndexCard from "./component/EditIndexCard";
import useIndexCard from "./hook/useIndexCard";
import GameOptions from "./component/GameOptions";

function App() {

    const {indexCards, setIndexCards, addNewIndexCard, updateIndexCard, removeIndexCard} = useIndexCard()

    return (
        <div id={"app"}>
            <Header setIndexCards={setIndexCards}/>
            <ToastContainer/>
            <Routes>
                <Route path="/"
                       element={<IndexCardOverview indexCards={indexCards}
                                                   removeIndexCard={removeIndexCard}
                                                   addNewIndexCard={addNewIndexCard}
                                                   updateIndexCard={updateIndexCard}
                       />}/>
                <Route path="/add"
                       element={<EditIndexCard addNewIndexCard={addNewIndexCard}/>}/>
                <Route path="/game"
                       element={<GameOptions indexCards={indexCards}
                                             setIndexCards={setIndexCards}/>}/>
            </Routes>
        </div>
    );
}

export default App;
