import React from 'react';
import { listCategory } from '../datas/plantList';
import PlantItem from './PlantItem';
import '../styles/ShoppingList.css';

function ShoppingList({ cart, updateCart }) {
    return (
        <div className="container">
            <div>
                {listCategory().map((category, index) => (
                    <div key={index}>{category}</div>
                ))}
            </div>
            {listCategory().map((category, index) => (
                <PlantItem
                    key={index}
                    cart={cart}
                    updateCart={updateCart}
                    category={category}
                />
            ))}
        </div>
    );
}

export default ShoppingList;