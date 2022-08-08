import React from 'react'
import Item from "./item"

function ItemList({ data }) {
    return (

        <div className="row  mt-5">
            <h2>Productos</h2>
            {data.map((item) => {
                return (
                    <Item
                        key={item.titulo}
                        tipo={item.tipo}
                        titulo={item.titulo}
                        precio={item.precio}
                        img={item.img}
                        stk={item.stk}
                        int={item.int}
                    />
                );
            })}
        </div>
    );
};
export default ItemList;