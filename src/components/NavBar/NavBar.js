import React from 'react'
import CartWidget from "./CartWidget"
import carritoImg from "../../assets/img/cart.png"
import { Link } from "react-router-dom";
import traerData from "../../helpers/traerData";


function NavBar() {

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     traerData()
    //         .then((respuesta) => {
    //             setData(respuesta);
    //         })
    // }, []);


    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
            <Link to={`/`} class="navbar-brand" onClick={() => this.forceUpdate()}> Todo 3D </Link>
    
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto me-auto mb-2 mt-3">
                        <li class="nav-item">
                        <Link to={`/`} class="navbar-brand" onClick={() => this.forceUpdate()}> Home </Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </a>
                            <ul class="dropdown-menu">
                            <Link to={`/category/Impresora`} class="dropdown-item" onClick={() => this.forceUpdate()}> Impresoras </Link>
                            <Link to={`/category/Filamento`} class="dropdown-item" onClick={() => this.forceUpdate()}> Filamento </Link>
                            <Link to={`/category/Resina`} class="dropdown-item" onClick={() => this.forceUpdate()}> Resinas </Link>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <CartWidget imgUrl={carritoImg}/>
        </nav>
    )
}
export default NavBar;