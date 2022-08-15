import React, { useState, useEffect } from "react";
import ItemList from "./itemList";
import traerData from "../../helpers/traerData";


const ItemListContainer = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        traerData()
            .then((respuesta) => {
                setData(respuesta);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <ItemList data={data} />
    )
};

export default ItemListContainer;