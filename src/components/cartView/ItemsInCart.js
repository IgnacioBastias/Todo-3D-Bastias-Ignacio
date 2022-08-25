import React, { useContext } from 'react'
import cartContext from '../../store/cartContext'
import ItemCart from "./ItemCart"



function ItemsInCart({Cart}) {

    const { clearCart } = useContext(cartContext)

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
                <button type="button" class="btn btn-danger btn-md" onClick={clearCart} >Vaciar carrito</button>
                <button type="button" class="btn btn-primary btn-md">Finalizar compra</button>
            </div>
        </div>
    );

};
export default ItemsInCart;