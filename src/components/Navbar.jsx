import React from 'react'
import { Link } from 'react-router-dom'

import { Search } from './Search'
import '../css/Navbar.css'

export const Navbar = ({ darkTheme, setDarkTheme }) => {
	return (
		<div className='Navbar'>
			<div className='nav__item'>
				<Link to="/">
					<p className=''>
						Search Engine
					</p>
				</Link>

				<button type='button' className='theme__btn' onClick={() => setDarkTheme(!darkTheme)}>
					{darkTheme ? 'Light 💡' : 'Dark 🌙'}
				</button>
			</div>

			<Search />
		</div>
	)
}