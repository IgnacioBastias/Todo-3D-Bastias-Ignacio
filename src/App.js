import React from 'react'
import './App.css';
import NavBar from "./components/NavBar/NavBar"
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
// import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./store/cartContext";
// import CartView from './components/cartView/CartView';
// import UserForm from './components/UserForm/UserForm';
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
