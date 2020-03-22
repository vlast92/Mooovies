import React from 'react';
import { useLocation } from 'react-router-dom';
import componentStyles from './Footer.module.scss';
import baseStyles from '../../scss/Base.module.scss';

function Footer() {
	const location = useLocation();

	return (
		<footer
			className={`${componentStyles.component} ${
				location.pathname === '/'
					? componentStyles.style_1
					: componentStyles.style_2
			}`}>
			<div
				className={
					location.pathname === '/'
						? baseStyles.containerSmall
						: baseStyles.container
				}>
				© 2020 moovie
			</div>
		</footer>
	);
}

export default Footer;
