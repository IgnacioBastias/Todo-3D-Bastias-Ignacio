import React from 'react'
import ItemCount from "./ItemCount";

function item({ titulo, precio, img, tipo, int, stk }) {
    return (
      <div className="card col-3 m-5">
        <div className="card-img">
          <img src={img} alt={titulo} className='m-2'/>
        </div>
        <div className="card-detail">
          <h2>{titulo}</h2>
          <p>{tipo}</p>
          <h3>$ {precio}</h3>
          <ItemCount initial={int} stock={stk}/>
        </div>
      </div>
    );
  }
  
  export default item;