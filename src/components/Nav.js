import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
	  <nav>
		  <ul>
			  <li><NavLink to="/">Home</NavLink></li>
			  <li><NavLink to="/reports">Reports</NavLink></li>
			  <li><NavLink to="/about">About</NavLink></li>
			  <li><NavLink to="/info">Info</NavLink></li>
		  </ul>
	 </nav>
  )
}