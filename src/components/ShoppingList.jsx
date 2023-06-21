import React from 'react';
import { listCategory, plantList } from '../datas/plantList';
import PlantItem from './PlantItem';
import '../styles/ShoppingList.css';

function ShoppingList({ cart, updateCart }) {

    return (
        <div className='lmj-shopping-list'>
            <ul>
                {listCategory().map((category, index) => (
                    <li key={index}>{category}</li>
                ))}
            </ul>
            {listCategory().map((category, index) => (
                <div className='lmj-plant-list'>
                    <PlantItem
                        key={index}
                        cart={cart}
                        updateCart={updateCart}
                        category={category}
                    />
                </div>
            ))}
        </div>
    );
}

export default ShoppingList;