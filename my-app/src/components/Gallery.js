import React from "react";
import "./Gallery.css";
import GallImg from "./GallImg";
import { Link } from "react-router-dom";

function Gallery() {
    return (
        <div className="grid">
          <Link to="/location">
          <GallImg />
          </Link>
          <Link to="/location">
          <GallImg />
          </Link>
          <Link to="/location">
          <GallImg />
          </Link>
          <Link to="/location">
          <GallImg />
          </Link>
          <Link to="/location">
          <GallImg />
          </Link>
          <Link to="/location">
          <GallImg />
          </Link>
        </div>
    );
}

export default Gallery;
