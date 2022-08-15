import React from 'react'
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

function item({ titulo, precio, img, tipo, int, stk, id }) {
  return (
    <div className="card col-3 m-5">
      <div className="card-img">
        <img src={img} alt={titulo} className='m-2' />
      </div>
      <div className="card-detail">
        <h2>{titulo}</h2>
        <p>{tipo}</p>
        <h3>$ {precio}</h3>
        <Link to={`/item/${id}`}>
          <button className='btn btn-primary btn-sm col-2 mx-auto'> Ver mas </button>
        </Link>
        <ItemCount initial={int} stock={stk} />
      </div>
    </div>
  );
}

export default item;