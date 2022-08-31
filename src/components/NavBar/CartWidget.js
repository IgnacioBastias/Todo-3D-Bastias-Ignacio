import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import cartContext from '../../store/cartContext'

function CartWidget({ imgUrl }) {

    const { cart } = useContext(cartContext)

    let totalItems = 0;

    cart.forEach((item) => {
      totalItems += item.cant;
    });

    return (
        <div className=' align-self-end mx-5'>

            <Link to={`/cart`} > <img src={imgUrl} width="60px" className='my-2' alt='carrito' /></Link>
            {cart.length === 0 ? 
            <div></div> :
            <span class="position-absolute top-5 start-90 translate-middle badge rounded-pill bg-warning mt-3"> {totalItems} <span class="visually-hidden">unread messages</span></span>}

        </div>
    )
};

export default CartWidget;