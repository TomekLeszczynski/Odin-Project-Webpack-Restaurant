import { loadMenu } from './menuTab'
import { loadHome } from './homeTab'
import { loadContact } from './contactTab'

import('./styles/main.scss').catch(error => {
	console.error('scss loading failure:', error)
})

const createDefaultContent = (() => {
	const content = document.getElementById('content')

	function createNav() {
		const nav = document.createElement('nav')
		const home = document.createElement('div')
		const menu = document.createElement('div')
		const contact = document.createElement('div')

		home.id = 'home'
		menu.id = 'menu'
		contact.id = 'contact'

		home.textContent = 'home'
		menu.textContent = 'menu'
		contact.textContent = 'contact'

		home.classList.add('nav-item', 'active')
		menu.classList.add('nav-item')
		contact.classList.add('nav-item')

		nav.append(home)
		nav.append(menu)
		nav.append(contact)
		content.append(nav)
	}

	function createContainer() {
		const container = document.createElement('div')
		container.classList.add('container')
		content.append(container)
	}

	function createFooter() {
		const footer = document.createElement('footer')
		content.append(footer)

		const links = [
			{ text: 'Facebook', href: 'http://facebook.com' },
			{ text: 'Instagram', href: 'http://instagram.com' },
			{ text: 'YouTube', href: 'http://YouTube.com' },
		]

		links.forEach(link => {
			const a = document.createElement('a')
			a.target = '_blank'
			a.href = link.href
			a.textContent = link.text
			a.classList.add('footer-item')
			footer.append(a)
		})
	}

	return { createContainer, createNav, createFooter }
})()

function loadContent() {
	createDefaultContent.createNav()
	createDefaultContent.createContainer()
	createDefaultContent.createFooter()
	loadHome()
}
loadContent()

function setCurrentTab(e) {
	const container = document.querySelector('.container')
	const navTabs = document.querySelectorAll('nav div')
	navTabs.forEach(tab => {
		tab.classList.remove('active')
	})
	if (e.target.id == 'home') {
		container.innerHTML = ''
		e.target.classList.add('active')
		loadHome()
	}
	if (e.target.id == 'menu') {
		container.innerHTML = ''
		e.target.classList.add('active')
		loadMenu()
	}
	if (e.target.id == 'contact') {
		container.innerHTML = ''
		e.target.classList.add('active')
		loadContact()
	}
}

document.querySelectorAll('nav').forEach(tab => {
	tab.addEventListener('click', setCurrentTab)
})
