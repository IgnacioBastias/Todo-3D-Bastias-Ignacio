import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import traerData from "../../helpers/traerData";


const ItemDetailContainer = () => {

  const [item, setItem] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    traerData(id)
      .then((respuesta) => {
        setItem(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ItemDetail
      id={item.id}
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