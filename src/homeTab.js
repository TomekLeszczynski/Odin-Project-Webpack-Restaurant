function loadHome() {
	const container = document.querySelector('.container')
	container.textContent = ''

	// <-- creating tab structure -->

	const home = document.createElement('div')
	const heading = document.createElement('h1')
	const text = document.createElement('p')
	const button = document.createElement('button')

	home.classList.add('home')

	// <-- adding text -->

	heading.textContent = 'Welcome to Onion Delights!'
	text.innerHTML =
		'We are a restaurant that emphasizes one extraordinary vegetable - <span>the onion</span>. Our passion and creativity allow us to create countless flavors and unique culinary experiences using only this humble yet versatile plant. We provide an authentic taste experience for all onion lovers.'
	button.textContent = "check today's onion"

	// <-- appending elements -->

	home.append(heading)
	home.append(text)
	home.append(button)
	container.append(home)
}

export { loadHome }
