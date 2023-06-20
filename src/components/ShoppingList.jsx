import {listCategory } from "../datas/plantList"
import React, { useState } from "react"
import { PlantItem } from "./PlantItem"
import '../styles/ShoppingList.css'


function ShoppingList({cart, updateCart}) {
    const [cart, updateCart] = useState([])
    
    return (
        
        <div className="container">

            {/* Panier */}
            <div>
                {
                    listCategory().map(v =>
                        <div>{v}</div>
                    )

                }
            </div>
            <PlantItem />
        </div>
    );
}

export default ShoppingList