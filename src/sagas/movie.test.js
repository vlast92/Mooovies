import {takeLatest} from "redux-saga/effects";
import { runSaga } from 'redux-saga';
import Api from "../Api";
import {makeGetMovieRequest, watchGetMovieRequest} from "./movie";
import {MAKING_GET_MOVIE_REQUEST, receiveMovieInfo} from "../actions";

describe('Testing movie Saga', () => {

    test('watchGetMovieRequest should process latest MAKING_GET_MOVIE_REQUEST action, call makeGetMovieRequest and should be done on next iteration', () => {

        const genObject = watchGetMovieRequest();

        expect(genObject.next().value)
            .toEqual(takeLatest(MAKING_GET_MOVIE_REQUEST, makeGetMovieRequest));
        expect(genObject.next().done).toBeTruthy();
    });

    test('makeGetMovieRequest should call api and dispatch success action', async () => {

        const dummyMovie = {
            Title: 'Blade Runner',
            Year: '1982',
            Rated: 'R',
            Released: '25 Jun 1982',
            Runtime: '117 min'
        };
        const getMovie = jest.spyOn(Api, 'getMovie')
            .mockImplementation(() => Promise.resolve({serverResponse: dummyMovie, requestError: ''}));

        const dispatched = [];
        await runSaga({
            dispatch: (action) => dispatched.push(action),
        }, makeGetMovieRequest, 'tt0083658');

        expect(getMovie).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([receiveMovieInfo(dummyMovie)]);
    });
});
