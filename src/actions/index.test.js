import {
	searchInputChange,
	SEARCH_INPUT_CHANGE,
	clearSearchInput,
	CLEAR_SEARCH_INPUT,
	receiveSearchResult,
	RECEIVE_SEARCH_RESULTS,
	makingSearchRequest,
	MAKING_SEARCH_REQUEST,
	searchingRequestFailed,
	SEARCHING_REQUEST_FAILED,
	clearSearchResults,
	CLEAR_SEARCH_RESULTS,
	searchResultsItemClicked,
	SEARCH_RESULTS_ITEM_CLICKED,
	makingGetMovieRequest,
	MAKING_GET_MOVIE_REQUEST,
	receiveMovieInfo,
	RECEIVE_MOVIE_INFO,
	clearMovieInfo,
	CLEAR_MOVIE_INFO,
	getMovieRequestFailed,
	GET_MOVIE_REQUEST_FAILED,
} from './index';

describe('ACTIONS --- Test action creators', () => {
	test('actionCreator searchInputChange', () => {
		const searchInputValue = 'Blade',
			action = searchInputChange(searchInputValue);
		expect(action).toEqual({ type: SEARCH_INPUT_CHANGE, searchInputValue });
	});

	test('actionCreator clearSearchInput', () => {
		const action = clearSearchInput();
		expect(action).toEqual({ type: CLEAR_SEARCH_INPUT });
	});

	test('actionCreator receiveSearchResult', () => {
		const searchResults = { Search: {}, Response: 'True' },
			action = receiveSearchResult(searchResults);
		expect(action).toEqual({ type: RECEIVE_SEARCH_RESULTS, searchResults });
	});

	test('actionCreator makingSearchRequest', () => {
		const searchWords = 'Blade runner',
			action = makingSearchRequest(searchWords);
		expect(action).toEqual({ type: MAKING_SEARCH_REQUEST, searchWords });
	});

	test('actionCreator searchingRequestFailed', () => {
		const error = 'Movie not found.',
			action = searchingRequestFailed(error);
		expect(action).toEqual({ type: SEARCHING_REQUEST_FAILED, error });
	});

	test('actionCreator clearSearchResults', () => {
		const action = clearSearchResults();
		expect(action).toEqual({ type: CLEAR_SEARCH_RESULTS });
	});

	test('actionCreator searchResultsItemClicked', () => {
		const action = searchResultsItemClicked();
		expect(action).toEqual({ type: SEARCH_RESULTS_ITEM_CLICKED });
	});

	test('actionCreator makingGetMovieRequest', () => {
		const imdbID = 'tt0083658',
			action = makingGetMovieRequest(imdbID);
		expect(action).toEqual({ type: MAKING_GET_MOVIE_REQUEST, imdbID });
	});

	test('actionCreator receiveMovieInfo', () => {
		const movieInfo = {
				Poster: 'N/A',
				Title: 'Blade Runner',
			},
			action = receiveMovieInfo(movieInfo);
		expect(action).toEqual({ type: RECEIVE_MOVIE_INFO, movieInfo });
	});

	test('actionCreator clearMovieInfo', () => {
		const action = clearMovieInfo();
		expect(action).toEqual({ type: CLEAR_MOVIE_INFO });
	});

	test('actionCreator getMovieRequestFailed', () => {
		const error = 'Movie not found.',
			action = getMovieRequestFailed(error);
		expect(action).toEqual({ type: GET_MOVIE_REQUEST_FAILED, error });
	});
});
