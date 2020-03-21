import React from 'react';
import './MoovieApp.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import MovieDetails from '../../pages/MovieDetails';

function MoovieApp() {
	return (
		<div className="Moovie-app">
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
		</div>
	);
}

export default MoovieApp;
