import React from 'react';

import AppWelcome from '../components/AppWelcome';
import SearchContainer from '../components/SearchContainer';
import Footer from '../components/Footer';

function HomePage() {
	return (
		<div className="Home-page app-content grid direction-column justify-content-center">
			<main>
				<div className="container">
					<AppWelcome />
					<SearchContainer />
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default HomePage;
