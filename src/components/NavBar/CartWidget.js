import React from 'react'
import { Link } from "react-router-dom";

function CartWidget({imgUrl}) {

    return(
        <Link to={`/cart`}>
            <img src={imgUrl} width="60px" className='mx-5 my-2' />
        </Link>
        )
};

export default CartWidget;