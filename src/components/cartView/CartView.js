import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cartContext from '../../store/cartContext'
import ItemsInCart from './ItemsInCart'

function CartView() {

    const { cart } = useContext(cartContext)

    return (
        <div>
            {cart.length === 0 ? 

            <div>
                <h1 className="my-5">Carrito vacío</h1> 
                <Link to={`/`}><button className='btn btn-primary btn-lg col-2 mx-auto my-5'>Comprar</button></Link>
            </div>

            : <ItemsInCart Cart={cart} />}
        </div>
    )
}

export default CartView;