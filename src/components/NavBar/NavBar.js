import React from 'react'
import CartWidget from "./CartWidget"
import carritoImg from "../../assets/img/cart.png"
import favIcon from "../../assets/img/icon.png"
import { Link } from "react-router-dom";


function NavBar() {

    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <Link to={`/`} class="navbar-brand mx-5"> <img src={favIcon} width="60px" className='my-2' alt='icon' /></Link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto me-auto mb-2 mt-3">
                        
                        <li class="nav-item"> <Link to={`/`} class="navbar-brand"> Home </Link> </li>
                        <li class="nav-item"> <Link to={`/category/Impresora`} class="navbar-brand"> Impresoras </Link> </li>
                        <li class="nav-item"> <Link to={`/category/Filamento`} class="navbar-brand"> Filamento </Link> </li>
                        <li class="nav-item"> <Link to={`/category/Resina`} class="navbar-brand"> Resinas </Link> </li>

                    </ul>
                </div>
            </div>
            <CartWidget imgUrl={carritoImg} />
        </nav>
    )
}
export default NavBar;