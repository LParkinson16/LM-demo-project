import axios from 'axios';
import { useState, useEffect } from 'react';
import '../App.css'

function Cart() {
    const [carts, setCarts] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/carts')
            .then(res => {
                setCarts(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className="App">
            <div className="item-list">
                <h1>current shopping carts</h1>
                {carts.map(cart => {
                    return (
                        <article className="cartCard">
                            <h3>Shopping cart {cart.id}</h3>
                            <p>User {cart.userId}</p>
                            {cart.products.map(e => {
                                return (
                                    <section>
                                        <strong><p>Product ID {e.productId}</p></strong>
                                        <p>Quantity {e.quantity}</p>
                                    </section>
                                )
                            })}
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Cart