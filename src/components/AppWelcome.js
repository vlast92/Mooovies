import React from 'react';
import '../assets/scss/components/AppWelcome.scss';

import Logo from './Logo';

function AppWelcome() {
	return (
		<div className="App-welcome">
			<Logo />
			<p className="welcome-text">
				Welcome to Moovie, your personal films guide. Use the search field below
				to get started.
			</p>
		</div>
	);
}

export default AppWelcome;
