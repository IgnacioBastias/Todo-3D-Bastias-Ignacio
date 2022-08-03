import React from 'react'
import CartWidget from "./CartWidget"
import carritoImg from "./img/cart.png"


function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Todo 3D</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto me-auto mb-2 mt-3">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Nosotros</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Impresoras</a></li>
                                <li><a class="dropdown-item" href="#">Filamentos</a></li>
                                <li><a class="dropdown-item" href="#">Accesorios</a></li>
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