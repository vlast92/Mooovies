import renderer from 'react-test-renderer';
import React from 'react';

import MovieCardShort from './MovieCardShort';
import { MemoryRouter, Route, Switch } from 'react-router-dom';

test('MovieCardShort renders correctly', () => {
	const dummyMovieInfo = {
		Poster:
			'https://m.media-amazon.com/images/M/MV5BOWVjZTIzNDYtNTBlNC00NTJjLTkzOTEtOTE0MjlhYzI2YTcyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
		Title: 'Blade II',
		Type: 'movie',
		Year: '2002',
		imdbID: 'tt0187738',
	};
	const tree = renderer
		.create(
			<MemoryRouter initialEntries={['/']}>
				<Switch>
					<Route path="/">
						<MovieCardShort movie={dummyMovieInfo} />
					</Route>
				</Switch>
			</MemoryRouter>
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
