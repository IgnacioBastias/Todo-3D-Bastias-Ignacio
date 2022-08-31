import React, { useContext } from 'react'
import cartContext from '../../store/cartContext'
import ItemCart from "./ItemCart"
import { Link } from "react-router-dom";



function ItemsInCart({ Cart }) {

    const { clearCart } = useContext(cartContext)

    let totalPrice = 0;
    Cart.forEach((item) => {
        totalPrice += item.precio * item.cant;
    });

    return (
        <div className="row  mt-5">
            <h2>Carrito</h2>
            {Cart.map((item) => {
                return (
                    <ItemCart
                        id={item.id}
                        key={item.titulo}
                        tipo={item.tipo}
                        titulo={item.titulo}
                        precio={item.precio}
                        img={item.img}
                        cant={item.cant}
                    />
                );
            })}
            <div>
                <h3 className='my-5'>Precio total: ${totalPrice} </h3>
            </div>
            <div>
                <button type="button" class="btn btn-danger btn-md mb-5 mx-3" onClick={clearCart} >Vaciar carrito</button>
                <Link to={`/form`} ><button type="button" class="btn btn-primary btn-md mb-5 mx-3">Finalizar compra</button></Link>
            </div>
        </div>
    );

};
export default ItemsInCart;