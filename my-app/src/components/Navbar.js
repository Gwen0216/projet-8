import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navBar">
    <div className="logoNav">
        <img src="./logoKasa.png" alt="Logo" />
    </div>
    <div className="menuBar">
        <Link to= "/">
        <div className="menuItem accueil ">Accueil</div>
        </Link>
        <Link to="/about">
        <div className="menuItem ">À propos</div>
        </Link>
    </div>
</nav>

    );
}

export default Navbar;