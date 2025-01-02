import React from "react";
import "./Title.css";

function Title({ title, location, tags }) {
    return (
        <div className="title-container">
            <div>
                <h1>{title}</h1>
                <p>{location}</p>
            </div>
            <div className="tags-container">
                {tags.map((tag, index) => (
                    <button key={index} className="tag-button">{tag}</button>
                ))}
            </div>
        </div>
    );
}

export default Title;
