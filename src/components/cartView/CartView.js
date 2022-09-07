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
                    <div>
                        <h1 className="my-5">Carrito vacío</h1>
                        <img src="https://stonehouseathenry.ie/images/empty-cart.png" class="img-fluid rounded-start my-5" alt="Empty Cart" />
                    </div>
                    <div>
                        <Link to={`/`}><button className='btn btn-warning btn-lg col-2 mx-auto my-5'>Comprar</button></Link>
                    </div>
                </div>

                : <ItemsInCart Cart={cart} />}
        </div>
    )
}

export default CartView;