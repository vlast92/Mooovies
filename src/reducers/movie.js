import {CLEAR_MOVIE_INFO, GET_MOVIE_REQUEST_FAILED, MAKING_GET_MOVIE_REQUEST, RECEIVE_MOVIE_INFO} from "../actions";

const initialState = {
    movieLoading: false,
    movieInfo: {}
};

const movie = (state = initialState, action) => {
    switch (action.type) {
        case MAKING_GET_MOVIE_REQUEST:

            return Object.assign({}, state, {
                movieLoading: true
            });
        case RECEIVE_MOVIE_INFO:

            return Object.assign({}, state, {
                movieLoading: false,
                movieInfo: action.movieInfo
            });
        case GET_MOVIE_REQUEST_FAILED:

            return Object.assign({}, state, {
                movieLoading: false,
                movieInfo: {Error: action.error}
            });
        case CLEAR_MOVIE_INFO:

            return Object.assign({}, state, {
                movieInfo: {}
            });

        default:

            return state;
    }
};

export default movie;