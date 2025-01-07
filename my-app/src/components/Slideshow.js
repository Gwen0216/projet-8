import React, { useState } from "react";
import "./Slideshow.css";

function Slideshow({ pictures, title }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="slideshow-container">
            {pictures && pictures.length > 0 ? (
                <>
                    <div className="slide">
                        <img
                            src={pictures[currentIndex]}
                            alt={`${title} ${currentIndex + 1}`}
                            className="cover-slide"
                        />
                    </div>
                    {pictures.length > 1 && (
                        <div className="navigation">
                            <img
                                className="prev-button"
                                src="/images/arrow-back.png"
                                alt="flèche gauche"
                                onClick={handlePrevious}
                            />
                            <img
                                className="next-button"
                                src="/images/arrow-forward.png"
                                alt="flèche droite"
                                onClick={handleNext}
                            />
                        </div>
                    )}
                    <div className="image-counter">
                        {currentIndex + 1} / {pictures.length}
                    </div>
                </>
            ) : (
                <p>Aucune image disponible</p>
            )}
        </div>
    );
}

export default Slideshow;

