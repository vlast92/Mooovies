/*
 * action types
 */
export const MAKING_SEARCH_REQUEST = 'MAKING_SEARCH_REQUEST';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const SEARCHING_REQUEST_FAILED = 'SEARCHING_REQUEST_FAILED';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';
export const SEARCH_INPUT_CHANGE = 'SEARCH_INPUT_CHANGE';
export const CLEAR_SEARCH_INPUT = 'CLEAR_SEARCH_INPUT';
export const SEARCH_RESULTS_ITEM_CLICKED = 'SEARCH_RESULTS_ITEM_CLICKED';

export const MAKING_GET_MOVIE_REQUEST = 'MAKING_GET_MOVIE_REQUEST';
export const RECEIVE_MOVIE_INFO = 'RECEIVE_MOVIE_INFO';
export const CLEAR_MOVIE_INFO = 'CLEAR_MOVIE_INFO';
export const GET_MOVIE_REQUEST_FAILED = 'GET_MOVIE_REQUEST_FAILED';

/*
 * action creators
 */
export function searchInputChange(searchInputValue) {
	return {
		type: SEARCH_INPUT_CHANGE,
		searchInputValue,
	};
}

export function clearSearchInput() {
	return {
		type: CLEAR_SEARCH_INPUT,
	};
}

export function receiveSearchResult(searchResults) {
	return {
		type: RECEIVE_SEARCH_RESULTS,
		searchResults,
	};
}

export function makingSearchRequest(searchWords) {
	return {
		type: MAKING_SEARCH_REQUEST,
		searchWords,
	};
}

export function searchingRequestFailed(error) {
	return {
		type: SEARCHING_REQUEST_FAILED,
		error,
	};
}

export function clearSearchResults() {
	return {
		type: CLEAR_SEARCH_RESULTS,
	};
}

export function searchResultsItemClicked() {
	return {
		type: SEARCH_RESULTS_ITEM_CLICKED,
	};
}

export function makingGetMovieRequest(imdbID) {
	return {
		type: MAKING_GET_MOVIE_REQUEST,
		imdbID,
	};
}

export function receiveMovieInfo(movieInfo) {
	return {
		type: RECEIVE_MOVIE_INFO,
		movieInfo,
	};
}

export function clearMovieInfo() {
	return {
		type: CLEAR_MOVIE_INFO,
	};
}

export function getMovieRequestFailed(error) {
	return {
		type: GET_MOVIE_REQUEST_FAILED,
		error,
	};
}
