import React from 'react';

import Header from '../components/Header';
import MovieCardFullContainer from '../components/MovieCardFullContainer';
import Footer from '../components/Footer';

function MovieDetails() {
	return (
		<div className="Movie-details-page app-content grid direction-column justify-content-center">
			<Header />
			<main>
				<MovieCardFullContainer />
			</main>
			<Footer />
		</div>
	);
}

export default MovieDetails;
