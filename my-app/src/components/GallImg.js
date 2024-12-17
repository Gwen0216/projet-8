import React from "react";
import "./GallImg.css";

function GallImg({ title, cover }) {
    return (
        <div className="cadre">
            <div className="image-container">
                <img src={cover} alt={title} className="cover-image" />  
            </div>
            <div className="text-container">
                <span className="line">{title}</span>  
            </div>
        </div>
    );
}

export default GallImg;
