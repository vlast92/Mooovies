import { combineReducers  } from "redux";

import search from "./search";
import movie from "./movie";

const moovieApp = combineReducers({
    search,
    movie
});

export default moovieApp;