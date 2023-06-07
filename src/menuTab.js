class Plate {
	constructor(plate, description, price) {
		this.plate = plate
		this.description = description
		this.price = price
	}

	// <-- creating item wit table structure -->

	createPlate() {
		const row = document.createElement('tr')
		const rowName = document.createElement('th')
		rowName.setAttribute('scope', 'row')
		const rowDescription = document.createElement('td')
		const rowPrice = document.createElement('td')

		rowName.textContent = this.plate
		rowDescription.textContent = this.description
		rowPrice.textContent = this.price

		row.append(rowName)
		row.append(rowDescription)
		row.append(rowPrice)

		return row
	}
}

class Menu {
	constructor() {
		this.menuItems = []
	}

	// <-- adding plate to plates array -->

	addPlate(menuItem) {
		this.menuItems.push(menuItem)
	}

	// <-- creating main table structure / adding items from plates array -->

	populateMenu() {
		const container = document.querySelector('.container')
		const table = document.createElement('table')
		const caption = document.createElement('caption')
		const tableBody = document.createElement('tbody')

		caption.textContent =
			'Our special menu features 10 fictional onion-based dishes that will provide you with unforgettable culinary journeys:'

		container.append(table)
		table.append(caption)
		table.append(tableBody)

		for (const menuItem of this.menuItems) {
			const tableElement = menuItem.createPlate()
			tableBody.append(tableElement)
		}
		return tableBody
	}
}

// <-- class instances -->

// Menu class instance

const onionMenu = new Menu()

// Plate class instances

const croquettes = new Plate(
	'Onion Croquettes',
	'Delicate filling with onion, cheese, and herbs, wrapped in crispy breadcrumbs. Perfect as an appetizer!',
	'23,50€'
)
const creamSoup = new Plate(
	'Onion Cream Soup',
	"Deeply aromatic soup where caramelized onion takes the lead, seasoned with delicate spices. It's warming and full of flavor.",
	'15,00€'
)
const fritters = new Plate(
	'Onion Fritters',
	'Traditional dumplings filled to the brim with a delicious mixture of onion, mushrooms, and herbs. Served with sour cream.',
	'17,50€'
)
const tart = new Plate(
	'Onion Tart',
	'A crispy crust with a delicate onion filling, topped with a creamy sauce and fresh herbs. A perfect choice for those who appreciate sophisticated flavors.',
	'12,00€'
)
const burger = new Plate(
	'Onion Burger',
	'Juicy burger with a grilled onion patty, toppings, and a flavorful onion sauce. Onion takes the spotlight!',
	'24,00€'
)
const pasta = new Plate(
	'Onion Pasta',
	'Al dente pasta with caramelized onion, garlic, and a hint of spiciness. Simple yet incredibly tasty combination.',
	'18,50€'
)

// <-- creating and loading menu -->

const loadMenu = () => {
	const container = document.querySelector('.container')
	container.innerHTML = ''
	onionMenu.menuItems = []
	onionMenu.addPlate(croquettes)
	onionMenu.addPlate(creamSoup)
	onionMenu.addPlate(fritters)
	onionMenu.addPlate(tart)
	onionMenu.addPlate(burger)
	onionMenu.addPlate(pasta)

	onionMenu.populateMenu()
}

export { loadMenu }
