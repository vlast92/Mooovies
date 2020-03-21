import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import MovieCardFullContainer from './MovieCardFullContainer';
import MovieCardFull from './MovieCardFull';
import {
	MAKING_GET_MOVIE_REQUEST,
	CLEAR_MOVIE_INFO,
	clearMovieInfo,
} from '../../actions';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

describe('MovieCardFullContainer --- REACT-REDUX (Mount + wrapping in <Provider> + <Router>)', () => {
	const initialState = {
		movie: {
			movieLoading: false,
			movieInfo: {},
		},
	};
	const mockStore = configureStore();
	let store, container;

	beforeEach(() => {
		store = mockStore(initialState);
		container = mount(
			<Provider store={store}>
				<MemoryRouter initialEntries={['/movie-details/tt0083658']}>
					<Switch>
						<Route path="/movie-details/:imdbID">
							<MovieCardFullContainer store={store} />
						</Route>
					</Switch>
				</MemoryRouter>
			</Provider>
		);
	});

	test('renders without crashing', () => {
		expect(container.find(MovieCardFull).length).toBe(1);
	});

	test('check props matches with initial state', () => {
		expect(container.find(MovieCardFull).prop('movieLoading')).toBe(
			initialState.movie.movieLoading
		);
		expect(container.find(MovieCardFull).prop('movieInfo')).toBe(
			initialState.movie.movieInfo
		);
	});

	test('check actions on dispatch', () => {
		const imdbID = 'tt0083658';

		store.dispatch(clearMovieInfo());

		const action = store.getActions();

		expect(action[0]).toEqual({
			type: MAKING_GET_MOVIE_REQUEST,
			imdbID,
		});
		expect(action[1].type).toBe(CLEAR_MOVIE_INFO);
	});
});
