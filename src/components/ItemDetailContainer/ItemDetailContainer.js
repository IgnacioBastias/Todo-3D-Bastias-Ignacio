import React, { useState, useEffect } from "react";
import ItemData from "../data/itemsData";
import ItemDetail from "./ItemDetail";

function traerItem() {
    return new Promise((resolve) => {

        setTimeout(() =>
            resolve(ItemData[2]), 2000
        );
    });
}

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);

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