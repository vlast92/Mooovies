import { combineReducers } from 'redux';

import search from './searchReducer';
import movie from './movieReducer';

const moovieApp = combineReducers({
	search,
	movie,
});

export default moovieApp;
