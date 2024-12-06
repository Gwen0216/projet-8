import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        <nav className="navBar">
    <div className="logoNav">
        <img src="./logoKasa.png" alt="Logo" />
    </div>
    <div className="menuBar">
        <div className="menuItem accBar">Accueil</div>
        <div className="menuItem apropBar">À propos</div>
    </div>
</nav>

    );
}

export default Navbar;