import React, { useState, useEffect } from "react";
import "./Footer.css";

function Footer() {
    const [imageSrc, setImageSrc] = useState("/images/footBanner.png");

    useEffect(() => {
        const updateImage = () => {
            if (window.innerWidth <= 768) {
                setImageSrc("/images/sizeMobile.png"); 
            } else {
                setImageSrc("/images/footBanner.png");
            }
        };

        updateImage();

        window.addEventListener("resize", updateImage);

        return () => {
            window.removeEventListener("resize", updateImage);
        };
    }, []);

    return (
        <div className="foot">
            <img src={imageSrc} alt="Logo" />
        </div>
    );
}

export default Footer;
