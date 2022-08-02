function ItemCount() {
    const [clicks, setClicks] = useState(1);
  
    return (
      <div>
        <h1>Prueba CoderHouse</h1>
        <button onClick={() => setClicks(clicks + 1)}>Click me</button>
        <button onClick={() => setClicks(0)}>Reset</button>
        <h3>Clicks: {clicks} </h3>
      </div>
    );
  }
  
  export default ItemCount;