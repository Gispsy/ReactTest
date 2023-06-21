import monstera from '../assets/monstera.jpg'

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		isBestSale: true,
		isSpecialOffer: true,
		light: 1,
		water: 2,
		cover: monstera,
		price: 15
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		light: 2,
		water: 1,
		cover: monstera,
		price: 16
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		isSpecialOffer: true,
		light: 1,
		water: 1,
		cover: monstera,
		price: 16
	},
	{
		name: 'yucca',
		category: 'classique',
		id: '4kk',
		light: 2,
		water: 3,
		cover: monstera,
		price: 16
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		light: 1,
		water: 1,
		cover: monstera,
		price: 16
	},
	{
		name: 'géranium',
		category: 'extérieur',
		id: '6uo',
		isSpecialOffer: true,
		light: 1,
		water: 1,
		cover: monstera,
		price: 16
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		light: 1,
		water: 1,
		cover: monstera,
		price: 16
	},
	{
		name: 'aloe',
		category: 'plante grasse',
		id: '8fp',
		isSpecialOffer: true,
		light: 1,
		water: 1,
		cover: monstera,
		price: 16
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		light: 3,
		water: 1,
		cover: monstera,
		price: 14
	}
]

export function listCategory() {
	return plantList
		.map(plant => plant.category)
		.filter((v, i, a) => a.indexOf(v) == i)
}