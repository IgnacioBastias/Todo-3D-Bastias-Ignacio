import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import cartContext from '../../store/cartContext'

function CartWidget({ imgUrl }) {

    const { cart } = useContext(cartContext)

    return (
        <div className=' align-self-end mx-5'>

            <Link to={`/cart`} > <img src={imgUrl} width="60px" className='my-2' alt='carrito' /></Link>
            {cart.length === 0 ? <div></div> : <div className='my-auto'> {cart.length}</div>}

        </div>
    )
};

export default CartWidget;