import movieReducer from './movieReducer';
import {
	CLEAR_MOVIE_INFO,
	GET_MOVIE_REQUEST_FAILED,
	MAKING_GET_MOVIE_REQUEST,
	RECEIVE_MOVIE_INFO,
} from '../actions';

describe('Testing movieReducer', () => {
	const initialState = {
		movieLoading: false,
		movieInfo: {},
	};
	let newState;

	test('reducer for MAKING_GET_MOVIE_REQUEST', () => {
		newState = movieReducer(initialState, { type: MAKING_GET_MOVIE_REQUEST });
		expect(newState).toEqual({
			movieLoading: true,
			movieInfo: {},
		});
	});

	test('reducer for RECEIVE_MOVIE_INFO', () => {
		const movieInfo = {
			Poster: 'N/A',
			Title: 'Blade II',
		};

		newState = movieReducer(initialState, {
			type: RECEIVE_MOVIE_INFO,
			movieInfo,
		});
		expect(newState).toEqual({
			movieLoading: false,
			movieInfo,
		});
	});

	test('reducer for GET_MOVIE_REQUEST_FAILED', () => {
		const error = 'Movie not found.';

		newState = movieReducer(initialState, {
			type: GET_MOVIE_REQUEST_FAILED,
			error,
		});
		expect(newState).toEqual({
			movieLoading: false,
			movieInfo: { Error: error },
		});
	});

	test('reducer for CLEAR_MOVIE_INFO', () => {
		newState = movieReducer(initialState, { type: CLEAR_MOVIE_INFO });
		expect(newState).toEqual({
			movieLoading: false,
			movieInfo: {},
		});
	});

	test('reducer for default action', () => {
		newState = movieReducer(initialState, { type: 'DEFAULT_ACTION' });
		expect(newState).toEqual(initialState);
	});
});
