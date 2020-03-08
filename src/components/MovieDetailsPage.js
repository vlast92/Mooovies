import React from "react";

import Header from "./Header";
import VisibleMovieCardFull from "../containers/VisibleMovieCardFull";
import Footer from "./Footer";

function MovieDetailsPage() {

    return (
        <div className="Movie-details-page app-content grid direction-column justify-content-center">
            <Header/>
            <main>
                <VisibleMovieCardFull/>
            </main>
            <Footer/>
        </div>
    );
}

export default MovieDetailsPage;