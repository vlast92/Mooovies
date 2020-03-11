import {takeLatest} from "redux-saga/effects";
import {runSaga} from 'redux-saga';
import Api from "../Api";
import {
    watchSearchResultsItemClicked,
    makeSearchResultsItemClick,
    watchSearchRequest,
    makeSearchRequest
} from "./search";
import {
    SEARCH_RESULTS_ITEM_CLICKED,
    clearSearchInput,
    clearSearchResults,
    MAKING_SEARCH_REQUEST,
    receiveSearchResult
} from "../actions";

describe('Testing search Saga', () => {

    test('watchSearchResultsItemClicked should process latest SEARCH_RESULTS_ITEM_CLICKED action, call makeSearchResultsItemClick and should be done on next iteration', () => {

        const genObject = watchSearchResultsItemClicked();

        expect(genObject.next().value)
            .toEqual(takeLatest(SEARCH_RESULTS_ITEM_CLICKED, makeSearchResultsItemClick));
        expect(genObject.next().done).toBeTruthy();
    });

    test('makeSearchResultsItemClick should call clearSearchInput and clearSearchResults', () => {

        const dispatched = [];

        runSaga({
            dispatch: (action) => dispatched.push(action),
        }, makeSearchResultsItemClick);

        expect(dispatched).toEqual([clearSearchInput(), clearSearchResults()]);
    });

    test('watchSearchRequest should process latest MAKING_SEARCH_REQUEST action, call makeSearchRequest and should be done on next iteration', () => {

        const genObject = watchSearchRequest();

        expect(genObject.next().value)
            .toEqual(takeLatest(MAKING_SEARCH_REQUEST, makeSearchRequest));
        expect(genObject.next().done).toBeTruthy();
    });

    test('makeSearchRequest should call api and dispatch success action', async () => {

        const dummySearchWords = "Blade runner";
        const dummySearchResults = {
            Search: [
                {
                    Title: 'Blade Runner',
                    Year: '1982',
                    imdbID: 'tt0083658',
                    Type: 'movie',
                    Poster: 'https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'
                },
                {
                    Title: 'Blade Runner 2049',
                    Year: '2017',
                    imdbID: 'tt1856101',
                    Type: 'movie',
                    Poster: 'https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg'
                }
            ],
            totalResults: '2',
            Response: 'True'
        };

        const search = jest.spyOn(Api, 'search')
            .mockImplementation(() => Promise.resolve({serverResponse: dummySearchResults, requestError: ''}));

        const dispatched = [];
        await runSaga({
            dispatch: (action) => dispatched.push(action),
        }, makeSearchRequest, dummySearchWords);

        expect(search).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([receiveSearchResult(dummySearchResults)]);
    });
});