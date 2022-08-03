import React from 'react'
import ItemCount from "./ItemCount";

function ItemListContainer({ text }) {

    return(
        <div>
            <h1>{ text }</h1>
            <ItemCount initial={1} stock={10}/>
        </div>
    )
};

export default ItemListContainer;