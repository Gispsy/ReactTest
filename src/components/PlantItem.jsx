import React from 'react';
import { plantList } from '../datas/plantList';
import CareScale from './CareScale';
import '../styles/PlantItem.css';

function PlantItem({ cart, updateCart, category }) {

    const Arrosage = (range) => {
        if (range === 1) {
            alert("Cette plante requiert peu d'arrosage");
        } else if (range === 2) {
            alert("Cette plante requiert modérément d'arrosage");
        } else if (range === 3) {
            alert("Cette plante requiert beaucoup d'arrosage");
        }
    };

    const Lumiére = (range) => {
        if (range === 1) {
            alert("Cette plante requiert peu de lumière");
        } else if (range === 2) {
            alert("Cette plante requiert modérément de lumière");
        } else if (range === 3) {
            alert("Cette plante requiert beaucoup de lumière");
        }
    };

    //Permet de filtre le planList et de l'appeler en simplifier
    const plantsInCategory = plantList.filter((plant) => plant.category === category);

    //categorie
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    function addtoCart(name, price) {
        const PlantAdd = cart.find((plant) => plant.name === name)
        if (PlantAdd) {
            const cartFiltre = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFiltre,
                { name, price, amount: PlantAdd.amount + 1 }
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1 }])
        }
    }

    return (
        <ul className="lmj-plant-list">
            {plantsInCategory.map((plant, index) => (
                <li key={index} className="lmj-plant-item">
                    {plant.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
                    <div className="lmj-1">
                        <li onClick={() => Lumiére(plant.light)}>
                            <CareScale careType="light" scaleValue={plant.light} />
                        </li>
                        <li onClick={() => Arrosage(plant.water)}>
                            <CareScale careType="water" scaleValue={plant.water} />
                        </li>
                    </div>
                    <div className="lmj-2">
                        <span className="lmj-plant-item-name">{plant.name}</span>
                    </div>
                    <div className="lmj-3">
                        <img
                            className="lmj-plant-item-cover"
                            src={plant.cover}
                            alt={`${plant.name} cover`}
                        />
                        <button onClick={() => addtoCart(plant.name, plant.price)}>Ajouter</button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default PlantItem;