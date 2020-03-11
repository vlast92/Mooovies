import searchReducer from './searchReducer';
import {
    CLEAR_SEARCH_INPUT, CLEAR_SEARCH_RESULTS,
    MAKING_SEARCH_REQUEST,
    RECEIVE_SEARCH_RESULTS,
    SEARCH_INPUT_CHANGE,
    SEARCHING_REQUEST_FAILED
} from "../actions";

describe('Testing searchReducer',()=>{

    const initialState = {
        searchLoading: false,
        searchInputValue: '',
        searchResults: {},
    };
    let newState;

    test('reducer for SEARCH_INPUT_CHANGE', () => {

        const searchInputValue = "Blade II";

        newState = searchReducer(initialState,{type: SEARCH_INPUT_CHANGE, searchInputValue});
        expect(newState).toEqual({
            searchLoading: false,
            searchInputValue,
            searchResults: {},
        });
    });

    test('reducer for CLEAR_SEARCH_INPUT', () => {

        newState = searchReducer(initialState,{type: CLEAR_SEARCH_INPUT});
        expect(newState).toEqual({
            searchLoading: false,
            searchInputValue: "",
            searchResults: {},
        });
    });

    test('reducer for SEARCHING_REQUEST_FAILED', () => {

        const error = "Movie not found.";

        newState = searchReducer(initialState,{type: SEARCHING_REQUEST_FAILED, error});
        expect(newState).toEqual({
            searchLoading: false,
            searchInputValue: "",
            searchResults: { Error: error },
        });
    });

    test('reducer for MAKING_SEARCH_REQUEST', () => {

        newState = searchReducer(initialState,{type: MAKING_SEARCH_REQUEST});
        expect(newState).toEqual({
            searchLoading: true,
            searchInputValue: "",
            searchResults: {},
        });
    });

    test('reducer for RECEIVE_SEARCH_RESULTS', () => {

        const searchResults = {Search: {}, Response: 'True'};

        newState = searchReducer(initialState,{type: RECEIVE_SEARCH_RESULTS, searchResults});
        expect(newState).toEqual({
            searchLoading: false,
            searchInputValue: "",
            searchResults,
        });
    });

    test('reducer for CLEAR_SEARCH_RESULTS', () => {

        newState = searchReducer(initialState,{type: CLEAR_SEARCH_RESULTS});
        expect(newState).toEqual({
            searchLoading: false,
            searchInputValue: "",
            searchResults: {},
        });
    });

    test('reducer for default action', () => {

        newState = searchReducer(initialState, {type: "DEFAULT_ACTION"});
        expect(newState).toEqual(initialState);
    });
});