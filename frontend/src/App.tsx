import React from 'react';
import './styles/App.css';
import EditIndexCardComponent from "./component/EditIndexCardComponent";
import useIndexCard from "./hook/useIndexCard";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Header from "./component/Header";
import {Difficulty, IndexCard} from "./model/IndexCard";
import IndexCardComponent from "./component/IndexCardComponent";

function App() {

    const {addNewIndexCard} = useIndexCard()

    const dummyIndexCard: IndexCard = {
        id: "123",
        term1: "Eichhörnchen",
        term2: "Oachkatzl",
        difficulty: Difficulty.EASY,
    }

    return (
        <div id={"app"}>
            <Header/>
            <ToastContainer/>
            <IndexCardComponent indexCard={dummyIndexCard}/>
            <EditIndexCardComponent addNewIndexCard={addNewIndexCard}/>
        </div>
    );
}

export default App;
