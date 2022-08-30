import React, { useState, useEffect } from "react";
import ItemList from "./itemList";
import traerData from "../../helpers/traerData";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [data, setData] = useState([]);

    const category = useParams().idCategory;

    useEffect(() => {
        traerData(null, category)
            .then((respuesta) => {
                setData(respuesta)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [category]);

    return (
        <ItemList data={data} />
    )
};

export default ItemListContainer;