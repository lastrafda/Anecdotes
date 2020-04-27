import React from 'react'
import { Menu } from 'semantic-ui-react'

const Navbar = () => {
	return (
		<Menu size='huge'>
		  <Menu.Item>
			  <img src="./logo.svg" alt="Fullstack Logo" />
		  </Menu.Item>
		  <Menu.Item
			name='Anecdotes'
			header
		  >
			Anecdotes
		  </Menu.Item>
		</Menu>
	  )
}

export default Navbar