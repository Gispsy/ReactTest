import { useState } from 'react'
import '../App.css'
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'

function App() {



  return (
    <>

      <Banner />
      <Cart />
      <ShoppingList />

    <form onSubmit={handleSubmit}>

      <input type="text" name='my_input' defaultValue='Tapez votre texte' />
      <button type='submit'>Entrer</button>

    </form>
    <Footer />
    </>
  )
}

export default App


function handleSubmit(e) {
  e.preventDefault()
  alert(e.target['my_input'].value)
}