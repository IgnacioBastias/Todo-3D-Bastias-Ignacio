import React, { useState, useEffect } from "react";
import itemsData from "../data/itemsData";
import ItemList from "./itemList";

function traerData() {
    return new Promise((resolve) => {

        setTimeout(() =>
            resolve(itemsData), 2000
        );
    });
}

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
        <ItemList data={data}/>
    )
};

export default ItemListContainer;