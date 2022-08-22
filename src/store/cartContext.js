import React, { createContext, useState } from "react";


const cartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  function addItemToCart(item, quantity) {

    console.log("ok!")
    console.log(item, quantity)

    if (isInCart(item.id)) {
      alert("El item ya esta en el carrito")
    }
    else {
      let copyCart = [...cart];
      copyCart.push({ ...item, quantity: quantity });
      setCart(copyCart)
      console.log(cart)
    }
  }

  function isInCart(id) {
    return (
      cart.some(itemInCart => itemInCart.id === id)
    )
  }

  return (
    <cartContext.Provider value={{ cart, addItemToCart }}>
      {children}
    </cartContext.Provider>
  );
}

export default cartContext;