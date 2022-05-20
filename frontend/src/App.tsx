import React from 'react';
import './styles/App.css';
import EditIndexCard from "./component/EditIndexCard";
import useIndexCard from "./hook/useIndexCard";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Header from "./component/Header";

function App() {

    const {addNewIndexCard} = useIndexCard()

    return (
        <div id={"app"}>
            <Header/>
            <ToastContainer/>
            <EditIndexCard addNewIndexCard={addNewIndexCard}/>
        </div>
    );
}

export default App;
