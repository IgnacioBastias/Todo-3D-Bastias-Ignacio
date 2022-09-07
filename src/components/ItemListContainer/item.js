import React from 'react'
import { Link } from "react-router-dom";


function item({ titulo, precio, img, tipo, id }) {
  return (
    <div className="card col-4" id='item'>
      <div className="card-img">
        <img src={img} alt={titulo} className='m-2' width="400px" height="300px" />
      </div>
      <div className="card-detail">
        <h2>{titulo}</h2>
        <p>{tipo}</p>
        <h3>$ {precio}</h3>
        <Link to={`/item/${titulo}`}>
          <button className='btn btn-warning btn-sm col-2 mx-auto my-3'> Ver mas </button>
        </Link>
      </div>
    </div>  
  );
}

export default item;