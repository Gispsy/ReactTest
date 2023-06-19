import { plantList } from "../datas/plantList"
import CareScale from "./CareScale"
import '../styles/PlantItem.css'



export function PlantItem(props) {

    const PlantItemValue = props.PlantItemValue

    const Arrosage = (range) => {
        if (range == 1) {
            alert("Cette plante requiert peu d'arrosage")

        }if (range == 2) {
            alert("Cette plante requiert modérement d'arrosage")

        }if (range == 3) {
            alert("Cette plante requiert beaucoup d'arrosage")

        }
    }

    const Lumiére = (range) => {
        if (range == 1) {
            alert("Cette plante requiert peu de lumiére")

        } if (range == 2) {
            alert("Cette plante requiert modérement de lumiére ")

        } if (range == 3) {
            alert("Cette plante requiert beaucoup de lumiére ")

        }
    }

    return (
        <div>

            {/* Liste produit */}
            < ul className="lmj-plant-list" >
                {
                    plantList.map((plantList, index) => (
                        <div>
                            <li key={index} PlantItemValue="name" className="lmj-plant-item">
                                {plantList.isSpecialOffer &&
                                    <div className="lmj-sales">Soldes</div>}
                                <div className="lmj-1">
                                    <li onClick={() => Lumiére(plantList.light)}><CareScale careType='light' scaleValue={plantList.light} /></li>
                                    <li onClick={() => Arrosage(plantList.water)}><CareScale careType='water' scaleValue={plantList.water} /></li>
                                </div>
                                <div className="lmj-2">
                                    <span className="lmj-plant-item-name">{plantList.name}</span>
                                </div>
                                <div className="lmj-3">
                                    <img className='lmj-plant-item-cover' src={plantList.cover} alt={`${plantList.name} cover`} />
                                </div>
                            </li>

                        </div>
                    ))
                }

            </ul >
        </div>

    )
}

// function handleClick(name) {
//     alert (`Vous voulez acheter 1 ${name} ? Très bon choix ! `)
// }