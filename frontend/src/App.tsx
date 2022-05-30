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

    const {indexCards, setIndexCards} = useIndexCard()

    return (
        <div id={"app"}>
            <Header indexCards={indexCards} setIndexCards={setIndexCards}/>
            <ToastContainer/>
            <Routes>
                <Route path="/"
                       element={<IndexCardOverview indexCards={indexCards}/>}/>
                <Route path="/add"
                       element={<EditIndexCard/>}/>
                <Route path="/game"
                       element={<GameOptions indexCards={indexCards} setIndexCards={setIndexCards}/>}/>
            </Routes>
        </div>
    );
}

export default App;
