import React from "react";
import "./Profil.css";

function Profil({ name, picture, rating }) {
    
    const stars = Array(5).fill(null).map((_, index) => {
        return (
            <i
                key={index}
                className="fa-solid fa-star"
                style={{ color: index < rating ? "#FFD700" : ": #E3E3E3", margin: "0 2px" }} 
            ></i>
        );
    });

    return (
        <div className="profil-container">
            <div className="profil-header">
                <p>{name}</p>
                <img src={picture} alt="Photo de profil" />
            </div>
            <div className="rating">
            <div className="rating-stars">
                {stars}
            </div>
            </div>
        </div>
    );
}

export default Profil;
