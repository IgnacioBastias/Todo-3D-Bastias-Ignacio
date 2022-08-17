import React, { useState } from 'react';

function ItemCount({ initial, stock, onAdd }) {

  const [clicks, setClicks] = useState(initial);

  const itemSuma = () => { clicks === stock ? console.log("sin stock suficiente") : setClicks(clicks + 1); };

  const itemResta = () => { clicks === initial ? console.log("error") : setClicks(clicks - 1); };

  const handleClick = () => { onAdd(clicks) }

  return (
    <div>
      <div className='row my-2'>
        <button className='btn btn-primary btn-sm col-2 mx-auto' onClick={itemResta}> - </button>
        <h3 className='col-4'> Cant: {clicks} </h3>
        <button className='btn btn-primary btn-sm col-2 mx-auto' onClick={itemSuma}> + </button>
      </div>
      <div className='row my-2'>
        <button className='btn btn-primary btn-sm col-2 mx-auto' onClick={ handleClick }> Finalizar Compra </button>
      </div>
    </div>
  );
}

export default ItemCount;