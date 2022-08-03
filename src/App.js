import React from 'react'
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer text="Catalogo de productos"/>
    </div>
  );
}

export default App;
