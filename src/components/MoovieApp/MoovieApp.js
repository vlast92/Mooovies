import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import MovieDetails from '../../pages/MovieDetails';

function MoovieApp() {
	return (
		<Router>
			<Switch>
				<Route path="/movie-details/:imdbID">
					<MovieDetails />
				</Route>
				<Route path="/">
					<HomePage />
				</Route>
			</Switch>
		</Router>
	);
}

export default MoovieApp;
