import { plantList } from "../datas/plantList"
import CareScale from "./CareScale"



export function PlantItem(props) {

    const PlantItemValue = props.PlantItemValue

    return (
        <div>

            {/* Liste produit */}
            < ul className="lmj-plant-list" >
                {
                    plantList.map((plantList, index) => (
                        <div>
                            <li key={index} PlantItemValue="name" className="lmj-plant-item">{plantList.name}
                                {plantList.isSpecialOffer && <div className="lmj-sales">Soldes</div>}

                                <CareScale careType='light' scaleValue={plantList.light} />
                                <CareScale careType='water' scaleValue={plantList.water} />
                            </li>
                        </div>
                    ))
                }

            </ul >
        </div>

    )
}