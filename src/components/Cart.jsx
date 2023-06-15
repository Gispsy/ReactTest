import '../styles/Cart.css'

function Cart() {

    //Plante + prix
    const plante1 = "Monstera";
    const prixMonstera = 8;
    const plante2 = "Lierre";
    const prixLierre = 10;
    const bouquet = "Bouquet de fleure";
    const prixBouquet = 15;

    return (
        <>
        <ul className='lmj-cart'>
            <h1>Panier</h1>
                <li>
                    {plante1 + " " + prixMonstera + "€"}
                </li>
                <li>
                    {plante2 + " " + prixLierre + "€"}
                </li>
                <li>
                    {bouquet + " " + prixBouquet + "€"}
                </li>
                <li>
                    Total = { prixMonstera + prixLierre + prixBouquet + "€"}
                </li>
        </ul>
        </>
    );
}

export default Cart