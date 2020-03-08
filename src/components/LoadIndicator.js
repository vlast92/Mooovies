import React from "react";
import "../assets/scss/components/LoadIndicator.scss";

function LoadIndicator(props) {

    const { text }  = props;

    return (
        <div className="Load-indicator">
            <div className="loading-icon">

            </div>
            { text ? <span className="loading-text">{text}</span> : "" }
        </div>
    );
}

export default LoadIndicator;