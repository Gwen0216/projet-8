import React from "react";
import "./Banner.css";

function Banner({ imageSrc, altText, showText, showOverlay }) {
    return (
        <div className="banner">
            <div className="imgBanner">
                <img className="imgBan" src={imageSrc} alt={altText} />
            </div>
            {showOverlay && <div className="overlay"></div>}
            {showText && (
                <div className="textBanner">
                    <p>Chez vous, partout et ailleurs</p>
                </div>
            )}
        </div>
    );
}

export default Banner;
