import React from "react";
import "../assets/scss/styles.scss"

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import HomePage from "./HomePage";
import MovieDetailsPage from "./MovieDetailsPage";

function MoovieApp() {

    return (
        <div className="Moovie-app">
            <Router>
                <Switch>
                    <Route path="/:imdbID">
                        <MovieDetailsPage/>
                    </Route>
                    <Route path="/">
                       <HomePage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default MoovieApp;