import React from "react";
import "../assets/scss/styles.scss"

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AppWelcome from "./AppWelcome";
import VisibleSearch from "../containers/VisibleSearch";
import VisibleMovieCardFull from "../containers/VisibleMovieCardFull";

function MoovieApp() {

    return(
        <div className="Moovie-app">
            <Router>
                <Switch>
                    <Route path="/:imdbID">
                        <Header />
                        <VisibleMovieCardFull />
                    </Route>
                    <Route path="/">
                        <AppWelcome />
                        <VisibleSearch/>
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </div>
    );
}

export default MoovieApp;