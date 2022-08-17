import React, { useState, useEffect } from "react";
import ItemList from "./itemList";
import traerData from "../../helpers/traerData";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [data, setData] = useState([]);

    const category = useParams().idCategory;

    useEffect(() => {
        traerData()
            .then((respuesta) => {
                if (category === undefined) {
                    setData(respuesta)
                } else {
                    let filtrados = respuesta.filter(elemento => elemento.tipo === category)
                    setData(filtrados)
                };
            })
    });

    return (
        <ItemList data={data} />
    )
};

export default ItemListContainer;