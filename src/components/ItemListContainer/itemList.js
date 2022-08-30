import React from 'react'
import Item from "./item"

function ItemList({ data }) {
    return (
        
        <div className="row  m-5 ">
            
            <h2 className='my-3'>Productos</h2>
            {data.map((item) => {
                return (
                
                    <Item
                        id={item.id}
                        key={item.id}
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