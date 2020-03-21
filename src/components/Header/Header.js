import React from 'react';
import './Header.scss';

import Logo from '../Logo';
import SearchContainer from '../SearchContainer';

function Header() {
	return (
		<header className="Header">
			<div className="container grid align-items-center">
				<Logo />
				<div className="size-auto search-outer">
					<SearchContainer />
				</div>
			</div>
		</header>
	);
}

export default Header;
