import React, { useState, useContext} from 'react'
import { Link } from "react-router-dom"
import ItemCount from '../ItemListContainer/ItemCount';
import cartContext from '../../store/cartContext'

function ItemDetail({ id, titulo, precio, img, tipo, stk }) {

    const { addItemToCart } = useContext(cartContext)
    const [quantity, setQuantity] = useState(0)

    const handleAdd = (clicks) => {

        const itemCart = { id, titulo, precio, img, tipo, stk}
        addItemToCart(itemCart , clicks)
        setQuantity(clicks) 
        
    }

    return (
        <div class="card m-5">
            <div class="row g-0 my-5">
                <div class="col-md-4">
                    <img src={img} class="img-fluid rounded-start" alt={titulo} />
                </div>
                <div class="col-md-8">
                    <div className="card-detail mt-5">
                        <h2 className='fs-1'>{titulo}</h2>
                        <p className='fs-2'>{tipo}</p>
                        <p className='fs-4'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et facilisis lacus. Nulla non dui id lectus venenatis molestie.
                            Nunc sed enim libero. Aliquam erat volutpat. Phasellus egestas urna ut imperdiet pretium. Etiam tempus augue vel nulla sodales,
                            a suscipit magna commodo. Proin sit amet nibh vel felis ultricies aliquam.
                            Nunc et facilisis lacus. Nulla non dui id lectus venenatis molestie.
                            Nunc sed enim libero. Aliquam erat volutpat. Phasellus egestas urna ut imperdiet pretium. Etiam tempus augue vel nulla sodales,
                            a suscipit magna commodo. Proin sit amet nibh vel felis ultricies aliquam.
                        </p>
                        <h3>Precio : $ {precio}</h3>

                        {quantity === 0 ?
                            <ItemCount initial={1} stock={stk} onAdd={handleAdd} /> :
                            <Link to={'/cart'}><button className='btn btn-warning btn-sm col-2 mx-auto my-3'> Ir al carrito </button></Link>}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;