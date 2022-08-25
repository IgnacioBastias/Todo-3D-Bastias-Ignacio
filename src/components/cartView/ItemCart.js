import React, { useContext } from 'react'
import cartContext from '../../store/cartContext'
import { Link } from "react-router-dom";

import './ItemCart.css'

function ItemCart({ titulo, precio, img, cant, id }) {

    const { deleteItem } = useContext(cartContext)

    const handleOnClick = () => {
        deleteItem(id)
    }

    return (

        <div class="card mx-auto" id='card'>
            <div class="row g-0 my-5">
                <div class="col-md-4">
                    <Link to={`/item/${id}`}><img src={img} class="img-fluid rounded-start " id='imagen' alt={titulo} /></Link>
                </div>
                <div class="col-md-8">
                    <div className="card-detail my-1">
                        <h2 className='fs-1'>{titulo}</h2>
                        <p className='fs-2'>Cant: {cant}</p>
                        <h3>Precio : $ {precio * cant}</h3>
                        <button className='btn btn-danger btn-sm col-2 mx-auto my-3' onClick={handleOnClick}> Eliminar </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCart;