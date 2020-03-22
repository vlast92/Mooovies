import React from 'react';
import componentStyles from './AppWelcome.module.scss';

import Logo from '../Logo';

function AppWelcome() {
	return (
		<div className={componentStyles.component}>
			<Logo />
			<p className={componentStyles.text}>
				Welcome to Moovie, your personal films guide. Use the search field below
				to get started.
			</p>
		</div>
	);
}

export default AppWelcome;
