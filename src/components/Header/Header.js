import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/logo-kasa.svg';

function Header() {
	return (
		<header>
			<div className='container'>
				<img src={logo} alt='logo' className='logo' />
				<nav>
					<Link to='/' > Accueil </Link>
					<Link to='/apropos'> A propos </Link>
				</nav>
			</div>
		</header>
	);
}
export default Header;