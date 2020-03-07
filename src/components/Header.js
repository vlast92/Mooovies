import React from "react";

import Logo from "./Logo";
import VisibleSearch from "../containers/VisibleSearch";

function Header() {

    return (
        <header className="Header">
            <div className="header-content">
                <Logo/>
                <VisibleSearch/>
            </div>
        </header>
    );
}

export default Header