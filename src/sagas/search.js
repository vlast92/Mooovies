import {call, put, takeLatest} from "redux-saga/effects";
import Api from "../Api";
import {
    clearSearchInput,
    clearSearchResults,
    MAKING_SEARCH_REQUEST,
    receiveSearchResult, SEARCH_RESULTS_ITEM_CLICKED,
    searchingRequestFailed
} from "../actions";

// Our worker Saga: will perform the movie search task
function* makeSearchRequest(action) {
    const {serverResponse, requestError} = yield call([Api, Api.search], action.searchWords);
    if (requestError) {
        yield put(searchingRequestFailed(requestError));
    } else {
        yield put(receiveSearchResult(serverResponse));
    }
}

// Our watcher Saga: spawn a new makingSearchRequest task on latest MAKING_SEARCH_REQUEST
export function* watchSearchRequest() {
    yield takeLatest(MAKING_SEARCH_REQUEST, makeSearchRequest);
}

// Our worker Saga: will perform the movie card short click
function* makeSearchResultsItemClick() {
    yield put(clearSearchInput());
    yield put(clearSearchResults());
}

// Our watcher Saga: spawn a new makeSearchResultsItemClick task on latest SEARCH_RESULTS_ITEM_CLICKED
export function* watchSearchResultsItemClicked() {
    yield takeLatest(SEARCH_RESULTS_ITEM_CLICKED, makeSearchResultsItemClick);
}