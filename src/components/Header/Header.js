import React from 'react';
import componentStyles from './Header.module.scss';
import baseStyles from '../../scss/Base.module.scss';
import gridStyles from '../../scss/Grid.module.scss';

import Logo from '../Logo';
import SearchContainer from '../SearchContainer';

function Header() {
	return (
		<header className={componentStyles.component}>
			<div
				className={`${baseStyles.container} ${gridStyles.flex} ${gridStyles.alignItemsCenter}`}>
				<div className={componentStyles.logoOuter}>
					<Logo />
				</div>
				<div
					className={`${componentStyles.searchOuter} ${gridStyles.sizeAuto}`}>
					<SearchContainer />
				</div>
			</div>
		</header>
	);
}

export default Header;
