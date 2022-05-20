import React from 'react';
import './App.css';
import EditIndexCard from "./component/EditIndexCard";
import useIndexCard from "./hook/useIndexCard";
import {ToastContainer} from "react-toastify";

function App() {

    const {addNewIndexCard} = useIndexCard()

    return (
        <div id={"app"}>
            <ToastContainer/>
            <EditIndexCard addNewIndexCard={addNewIndexCard}/>
        </div>
    );
}

export default App;
