import { all } from 'redux-saga/effects';

import { watchSearchRequest, watchSearchResultsItemClicked } from './search';
import { watchGetMovieRequest } from './movie';

function* checkSaga() {
	yield console.log('Sagas active');
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
	yield all([
		checkSaga(),
		watchSearchRequest(),
		watchGetMovieRequest(),
		watchSearchResultsItemClicked(),
	]);
}
