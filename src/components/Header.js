import React from "react";
import "../assets/scss/components/Header.scss";

import Logo from "./Logo";
import VisibleSearch from "../containers/VisibleSearch";

function Header() {

    return (
        <header className="Header">
            <div className="container grid align-items-center">
                <Logo/>
                <div className="size-auto search-outer">
                    <VisibleSearch/>
                </div>
            </div>
        </header>
    );
}

export default Header