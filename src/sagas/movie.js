import {call, put, takeLatest} from "redux-saga/effects";
import Api from "../Api";
import {getMovieRequestFailed, MAKING_GET_MOVIE_REQUEST, receiveMovieInfo} from "../actions";

// Our worker Saga: will perform the movie get task
function* makeGetMovieRequest(action) {
    const {serverResponse, requestError} = yield call([Api, Api.getMovie], action.imdbID);
    if (requestError) {
        yield put(getMovieRequestFailed(requestError));
    } else {
        yield put(receiveMovieInfo(serverResponse));
    }
}

// Our watcher Saga: spawn a new makeGetMovieRequest task on latest MAKING_GET_MOVIE_REQUEST
export function* watchGetMovieRequest() {
    yield takeLatest(MAKING_GET_MOVIE_REQUEST, makeGetMovieRequest);
}