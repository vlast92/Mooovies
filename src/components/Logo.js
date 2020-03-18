import React from 'react';

import logoImg from '../assets/img/logo.png';
import { Link } from 'react-router-dom';

function Logo() {
	return (
		<div className="Logo">
			<Link to="/">
				<img src={logoImg} alt="Moovie" />
			</Link>
		</div>
	);
}

export default Logo;
