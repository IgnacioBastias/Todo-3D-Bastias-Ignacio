import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import traerData from "../../helpers/traerData";
import { Waveform } from '@uiball/loaders'


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

    <div>
      {item.length !== 0 ?

        <ItemDetail
          id={item.id}
          tipo={item.tipo}
          titulo={item.titulo}
          precio={item.precio}
          img={item.img}
          stk={item.stk}
          int={item.int}
        /> :

        <div className="position-absolute top-50 start-50 translate-middle">
          <Waveform
            size={40}
            lineWeight={3.5}
            speed={1}
            color="#ffbb33"
          />
        </div>}
    </div>

  )
};

export default ItemDetailContainer;