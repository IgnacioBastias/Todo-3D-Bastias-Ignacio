import React, { useState, useEffect } from "react";
import ItemList from "./itemList";
import traerData from "../../helpers/traerData";
import { useParams } from "react-router-dom";
import { Waveform } from '@uiball/loaders'

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
        <div>
            {data.length > 0 ?
    
                <ItemList data={data} /> :

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

export default ItemListContainer;