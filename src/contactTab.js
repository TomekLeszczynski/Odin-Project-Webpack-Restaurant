function loadContact() {
	const container = document.querySelector('.container')

	// <-- creating tab structure -->

	const contactBox = document.createElement('div')
	const heading = document.createElement('h2')
	const title = document.createElement('p')
	const address = document.createElement('p')
	const address2 = document.createElement('p')
	const title2 = document.createElement('p')
	const phone = document.createElement('p')

	contactBox.classList.add('contact-box')
	title.classList.add('title')
	title2.classList.add('title')

	// <-- adding text -->

	heading.textContent = 'Onion Delights'
	title.textContent = 'Visit us:'
	address.textContent = '666 Onionstreet'
	address2.textContent = 'Onionville CA 98765-8765'
	title2.textContent = 'Reservations:'
	phone.textContent = '+1 250 555 0199'

	contactBox.append(heading)
	contactBox.append(title)
	contactBox.append(address)
	contactBox.append(address2)
	contactBox.append(title2)
	contactBox.append(phone)
	container.append(contactBox)
}

export { loadContact }
