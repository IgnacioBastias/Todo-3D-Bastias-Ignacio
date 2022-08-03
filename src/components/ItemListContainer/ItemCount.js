import React, { useState } from 'react';

function ItemCount({ initial, stock }) {

  const [clicks, setClicks] = useState(1);

  const itemSuma = () => { clicks === stock ? console.log("sin stock suficiente") : setClicks(clicks + 1); };

  const itemResta = () => { clicks === initial ? console.log("error") : setClicks(clicks - 1); };

  return (
    <div className='row'>
      <button className='col-lg-1' onClick={itemSuma}> + </button>
      <h3 className='col-lg-1' > Items: {clicks} </h3>
      <button className='col-lg-1' onClick={itemResta}> - </button>
    </div>
  );
}

export default ItemCount;