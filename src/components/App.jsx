import React, { useState } from 'react';
import '../App.css';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';

function App() {
  const [cart, updateCart] = useState([]);

  return (
    <>
      <Banner />
      <Cart cart={cart} updateCart={updateCart} />
      <ShoppingList cart={cart} updateCart={updateCart} />
      <Footer />
    </>
  );
}

export default App;


function handleSubmit(e) {
  e.preventDefault()
  alert(e.target['my_input'].value)
}