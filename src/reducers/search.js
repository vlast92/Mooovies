import {
    CLEAR_SEARCH_INPUT, CLEAR_SEARCH_RESULTS,
    MAKING_SEARCH_REQUEST,
    RECEIVE_SEARCH_RESULTS,
    SEARCH_INPUT_CHANGE,
    SEARCHING_REQUEST_FAILED
} from "../actions";

const initialState = {
    searchLoading: false,
    searchInputValue: '',
    searchResults: {},
};

const search = (state = initialState, action) => {

    switch (action.type) {
        case SEARCH_INPUT_CHANGE:

            return Object.assign({}, state, {
                searchInputValue: action.searchInputValue
            });
        case CLEAR_SEARCH_INPUT:

            return Object.assign({}, state, {
                searchInputValue: ''
            });
        case SEARCHING_REQUEST_FAILED:

            return Object.assign({}, state, {
                searchLoading: false,
                searchResults: {Error: action.error}
            });
        case MAKING_SEARCH_REQUEST:

            return Object.assign({}, state, {
                searchLoading: true
            });
        case RECEIVE_SEARCH_RESULTS:

            return Object.assign({}, state, {
                searchLoading: false,
                searchResults: action.searchResults
            });
        case CLEAR_SEARCH_RESULTS:

            return Object.assign({}, state, {
                searchResults: {}
            });

        default:

            return state;
    }
};

export default search;