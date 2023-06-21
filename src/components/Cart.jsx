import React, { useState } from 'react';
import '../styles/Cart.css';
import { plantList } from '../datas/plantList';

function Cart({ cart, updateCart }) {
    const [isReset, setisReset] = useState(false);
    const [isOpen, setisOpen] = useState(true);

    //Total du panier
    const total = cart.reduce(
        (acc,planType) => acc + planType.amount * planType.price, 0
    )

    function resetCart() {
        updateCart([]);
        setisReset(true);
    }

    return isOpen ? (
        <div className='lmj-cart'>
            <button className='lmj-cart-toggle-button' onClick={() => setisOpen(false)}>
                Fermer
            </button>
            <h2>Panier</h2>
            <ul className='lmj-cart'>
                {cart.map(({ name, price, amount }, index) => (
                    <div key={ `${name}-${index}` }>
                        {name} {price} € x {amount}
                    </div>
                ))}
            </ul>
            <h2>Total = { total }€</h2>
            <button onClick={resetCart}>Vider le panier</button>
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button className='lmj-cart-toggle-button' onClick={() => setisOpen(true)}>
                Ouvrir
            </button>
        </div>
    );
}

export default Cart;