import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import VisibleSearch from "../containers/VisibleSearch";
import VisibleMovieCardFull from "../containers/VisibleMovieCardFull";

function App() {

    return(
        <Router>
            <Switch>
                <Route path="/:imdbID">
                    <div><Link to="/">Home</Link></div>
                    <VisibleSearch/>
                    <VisibleMovieCardFull />
                </Route>
                <Route path="/">
                    <VisibleSearch/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;