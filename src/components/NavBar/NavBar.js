import React from 'react'
import CartWidget from "./CartWidget"
import carritoImg from "../../assets/img/cart.png"
import { Link } from "react-router-dom";


function NavBar() {

    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
            <Link to={`/`} class="navbar-brand mx-5"> Todo 3D </Link>
    
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto me-auto mb-2 mt-3">
                        <li class="nav-item">
                        <Link to={`/`} class="navbar-brand"> Home </Link>
                        </li>
                        <li class="nav-item dropdown">
                            <p class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </p>
                            <ul class="dropdown-menu">
                            <Link to={`/category/Impresora`} class="dropdown-item"> Impresoras </Link>
                            <Link to={`/category/Filamento`} class="dropdown-item"> Filamento </Link>
                            <Link to={`/category/Resina`} class="dropdown-item"> Resinas </Link>
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