import React from 'react'
import './animatedStyles.css'
import { Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group"
import CartView from "./cartView/CartView";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import UserForm from "./UserForm/UserForm";



function AnimatedRoutes () {

    const location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={1000}
            >
                <Routes location={location}>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:idCategory" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<CartView />} />
                    <Route path="/form" element={<UserForm />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    )
};

export default AnimatedRoutes;