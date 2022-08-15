import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemData from "../data/itemsData";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {

  const [item, setItem] = useState([]);

  const { id } = useParams();

  function traerItem() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let itemPedido = ItemData.find(
          (producto) => producto.id === Number(id)
        );

        if (itemPedido === undefined) reject("No encontramos el item");
        else resolve(itemPedido);
      }, 1000);
    });
  }

  useEffect(() => {
    traerItem()
      .then((respuesta) => {
        setItem(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ItemDetail
      tipo={item.tipo}
      titulo={item.titulo}
      precio={item.precio}
      img={item.img}
      stk={item.stk}
      int={item.int}
    />
  )
};

export default ItemDetailContainer;