import '../styles/Cart.css'
import { useState } from "react";

function Cart({cart, updateCart}) {

    const [isReset, setisReset] = useState(false)
    const [isOpen, setisOpen] = useState(true)

    //Plante + prix
    const plante1 = "Monstera";
    const prixMonstera = 8;
    const plante2 = "Lierre";
    const prixLierre = 10;
    const bouquet = "Bouquet de fleure";
    const prixBouquet = 15;

    function resetCart(){
        updateCart(0);
        setisReset(true)

    }

    return isOpen ? (
        <div className='lmj-cart'>
        <button className='lmj-cart-toggle-button' onClick={() => setisOpen(false)}>Fermer</button>
            <ul className='lmj-cart'>
                <h2>Panier</h2>
                <li>
                    {plante1 + " " + prixMonstera + "€"}
                    <span>
                        {cart}
                    </span>
                </li>
                <li>
                    {plante2 + " " + prixLierre + "€"}
                </li>
                <li>
                    {bouquet + " " + prixBouquet + "€"}
                </li>
                <li>
                    Total = {prixMonstera*cart + prixLierre + prixBouquet + "€"}
                </li>
            </ul>

            <button onClick={resetCart}> Vider le panier </button>
        </div>
    ) : (
		<div className='lmj-cart-closed'>

            <button className='lmj-cart-toggle-button' onClick={() => setisOpen(true)}>
                Ouvrire

            </button>


        </div>

    )
}

export default Cart