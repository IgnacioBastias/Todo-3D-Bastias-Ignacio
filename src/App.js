import React from 'react'
import './App.css';
import NavBar from "./components/NavBar/NavBar"

import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./store/cartContext";
import AnimatedRoutes from './components/animatedRoutes';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <AnimatedRoutes/>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
