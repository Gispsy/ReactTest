import { plantList, listCategory } from "../datas/plantList"
import React from "react"
import CareScale from "./CareScale";
import '../styles/ShoppingList.css'

function ShoppingList() {
    return (
        <div className="container">
            <div>
                {
                    listCategory().map(v =>
                        <div>{v}</div>
                    )

                }

            </div>
            <ul className="lmj-plant-list">
                {plantList.map((plantList, index) => (
                    <div>
                        <li data-index={index} className="lmj-plant-item">{plantList.name}
                            {plantList.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
                            <CareScale careType='light' scaleValue={plantList.light} />
                            <CareScale careType='water' scaleValue={plantList.water} />
                        </li>
                    </div>
                ))}

            </ul>
        </div>
    );
}

export default ShoppingList