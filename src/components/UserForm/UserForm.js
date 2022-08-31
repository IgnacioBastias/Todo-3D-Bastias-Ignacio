import React, { useState, useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import cartContext from '../../store/cartContext';
import firestoreDB from "../../services/firestore";
import { Link } from "react-router-dom";


function UserForm() {

    const { cart } = useContext(cartContext)

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        telefono: "",
    });

    const [order, setOrder] = useState({
        id: '',
        complete: false,
    });

    let total = 0;
    cart.forEach((item) => {
        total += item.precio * item.cant;
    });

    const ordenDeCompra = {
        buyer: { ...userData },
        items: { ...cart },
        total: total,
        date: new Date(),
    };

    async function handleSubmit(evt) {
        evt.preventDefault();

        const collectionRef = collection(firestoreDB, "orders");
        const order = await addDoc(collectionRef, ordenDeCompra);
        setOrder({ id: order.id, complete: true });

    }

    function changeHandler(evt) {
        const input = evt.target;

        const value = input.value;
        const inputName = input.name;

        let copyUserData = { ...userData };

        copyUserData[inputName] = value;
        setUserData(copyUserData);
    }

    if (order.complete === true) {
        return (
            // <div>
            //     <h1>Gracias por tu compra!</h1>
            //     <p>El id de seguimiento de tu compra es: {order.id}</p>
            // </div>
            <div class="card text-center w-50 position-absolute top-50 start-50 translate-middle">
                <div class="card-header"></div>
                <div class="card-body my-5">
                    <h5 class="card-title">¡Gracias por tu compra!</h5>
                    <p class="card-text">El id de seguimiento de tu compra es: {order.id}</p>
                    <Link to={`/`}><button className='btn btn-primary btn-md mx-auto my-2'>Volver a comprar</button></Link>
                </div>
                <div class="card-footer text-muted"></div>
            </div>
        );
    }

    return (

        <div>
            <h2 className="mt-5"> Finaliza tu compra </h2>
            <form className="w-25 position-absolute top-50 start-50 translate-middle" onSubmit={handleSubmit}>

                <div class="mb-3">

                    <label for="name" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="exampleInputPassword1"
                        value={userData.name}
                        onChange={changeHandler}
                        name="name"
                    />

                </div>

                <div class="mb-3">

                    <label for="exampleInputPassword1" class="form-label">Telefono</label>
                    <input type="text" class="form-control" id="exampleInputPassword1"
                        value={userData.telefono}
                        onChange={changeHandler}
                        name="telefono"

                    />
                </div>

                <div class="mb-3">

                    <label for="exampleInputEmail1" class="form-label">Correo Electronico</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        value={userData.email}
                        onChange={changeHandler}
                        name="email"

                    />
                    <div id="emailHelp" class="form-text">Nunca compartiremos tu correo con alguien mas.</div>
                </div>

                <div className="mt-5">

                    <button class="btn btn-danger btn-md mb-5 mx-3" type="reset"> Limpiar </button>
                    <button class="btn btn-primary btn-md mb-5 mx-3" type="submit" onTouch={handleSubmit}> Finalizar Compra </button>

                </div>
            </form>
        </div>

    );
}

export default UserForm;