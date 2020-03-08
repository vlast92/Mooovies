import React from "react";

import AppWelcome from "./AppWelcome";
import VisibleSearch from "../containers/VisibleSearch";
import Footer from "./Footer";

function HomePage() {

    return (
        <div className="Home-page app-content grid direction-column justify-content-center">
            <main>
                <div className="container">
                    <AppWelcome/>
                    <VisibleSearch/>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default HomePage