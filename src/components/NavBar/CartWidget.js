import React from 'react'

function CartWidget({imgUrl}) {

    return(
        <img src={imgUrl} width="60px" className='mx-5 my-2' />
    )
};

export default CartWidget;