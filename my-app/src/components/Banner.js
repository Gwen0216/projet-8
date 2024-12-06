import React from "react";
import "./Banner.css";

function Banner() {
    return (
        <div className="banner">
            <div className="imgBanner">
                <img className="imgBan" src="./imgbanner.png" alt="Bannière" />
            </div>
            <div className="overlay"></div> 
            <div className="textBanner">
                <p>Chez vous, partout et ailleurs</p>
            </div>
        </div>
    );
}

export default Banner;
