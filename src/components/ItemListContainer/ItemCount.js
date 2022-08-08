import React, { useState } from 'react';

function ItemCount({ initial, stock }) {

  const [clicks, setClicks] = useState(1);

  const itemSuma = () => { clicks === stock ? console.log("sin stock suficiente") : setClicks(clicks + 1); };

  const itemResta = () => { clicks === initial ? console.log("error") : setClicks(clicks - 1); };

  return (
    <div className='row my-2'>
      <button className='btn btn-primary btn-sm col-2 mx-auto' onClick={itemResta}> - </button>
      <h3 className='col-4'> Cant: {clicks} </h3>
      <button className='btn btn-primary btn-sm col-2 mx-auto' onClick={itemSuma}> + </button>
    </div>
  );
}

export default ItemCount;