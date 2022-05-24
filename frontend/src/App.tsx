import React from 'react';
import './styles/App.css';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Header from "./component/Header";
import IndexCardOverview from "./component/IndexCardOverview";
import {Route, Routes} from 'react-router-dom';
import IndexCardEditForm from "./component/IndexCardEditForm";

function App() {

    return (
        <div id={"app"}>
            <Header/>
            <ToastContainer/>
            <Routes>
                <Route path="/"
                       element={<IndexCardOverview/>}/>
                <Route path="/add"
                       element={<IndexCardEditForm/>}/>
            </Routes>
        </div>
    );
}

export default App;
