import {listCategory } from "../datas/plantList"
import React from "react"
import { PlantItem } from "./PlantItem"
import '../styles/ShoppingList.css'

function ShoppingList() {
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