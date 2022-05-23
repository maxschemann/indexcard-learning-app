import React from 'react';
import './styles/App.css';
import EditIndexCard from "./component/EditIndexCard";
import useIndexCard from "./hook/useIndexCard";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Header from "./component/Header";
import IndexCardOverview from "./component/IndexCardOverview";
import {Route, Routes} from 'react-router-dom';

function App() {

    const {indexCards} = useIndexCard()

    return (
        <div id={"app"}>
            <Header/>
            <ToastContainer/>
            <Routes>
                <Route path="/"
                       element={<IndexCardOverview indexCards={indexCards}/>}/>
                <Route path="/add"
                       element={<EditIndexCard/>}/>
            </Routes>
        </div>
    );
}

export default App;
