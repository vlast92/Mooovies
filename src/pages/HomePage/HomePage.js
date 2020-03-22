import React from 'react';

import AppWelcome from '../../components/AppWelcome';
import SearchContainer from '../../components/SearchContainer';
import Footer from '../../components/Footer';
import baseStyles from '../../scss/Base.module.scss';
import pageStyles from './HomePage.module.scss';
import gridStyles from '../../scss/Grid.module.scss';

function HomePage() {
	return (
		<div
			className={`${pageStyles.component} ${baseStyles.appContent} ${gridStyles.flex} ${gridStyles.directionColumn} ${gridStyles.justifyContentCenter}`}>
			<main>
				<div className={baseStyles.containerSmall}>
					<AppWelcome />
					<SearchContainer />
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default HomePage;
