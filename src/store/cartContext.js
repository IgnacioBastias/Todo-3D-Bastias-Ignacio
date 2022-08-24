import React, { createContext, useState } from "react";


const cartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  function addItemToCart(item, quantity) {

    if (isInCart(item.id)) {
      alert("El producto ya esta en el carrito")
    }
    else {
      let copyCart = [...cart];
      copyCart.push({ ...item, cant: quantity });
      setCart(copyCart)
    }
  }


  function deleteItem(id) {
    setCart(cart.filter(item => item.id !== id))
  }

  function clearCart() {
    setCart([])
  }

  function isInCart(id) {
    return (
      cart.some(itemInCart => itemInCart.id === id)
    )
  }

  return (
    <cartContext.Provider value={{ cart, addItemToCart, deleteItem, clearCart }}>
      {children}
    </cartContext.Provider>
  );
}

export default cartContext;