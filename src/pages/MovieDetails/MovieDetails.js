import React from 'react';

import Header from '../../components/Header';
import MovieCardFullContainer from '../../components/MovieCardFullContainer';
import Footer from '../../components/Footer';
import baseStyles from '../../scss/Base.module.scss';
import gridStyles from '../../scss/Grid.module.scss';

function MovieDetails() {
	return (
		<div
			className={`${baseStyles.appContent} ${gridStyles.flex} ${gridStyles.directionColumn} ${gridStyles.justifyContentCenter}`}>
			<Header />
			<main>
				<MovieCardFullContainer />
			</main>
			<Footer />
		</div>
	);
}

export default MovieDetails;
