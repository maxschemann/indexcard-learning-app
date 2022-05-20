import React from 'react';
import './App.css';
import EditIndexCard from "./component/EditIndexCard";
import useIndexCard from "./hook/useIndexCard";

function App() {

  const {addNewIndexCard} = useIndexCard()

  return (
    <EditIndexCard addNewIndexCard={addNewIndexCard}/>
  );
}

export default App;
