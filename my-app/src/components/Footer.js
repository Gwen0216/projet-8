import React, { useState, useEffect } from "react";
import "./Footer.css";
import footBanner from "../images/footBanner.png"; 
import sizeMobile from "../images/sizeMobile.png";

function Footer() {
    const [imageSrc, setImageSrc] = useState("/images/footBanner.png");

    useEffect(() => {
        const updateImage = () => {
            if (window.innerWidth <= 768) {
                setImageSrc(sizeMobile); 
            } else {
                setImageSrc(footBanner);
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
