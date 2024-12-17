import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Collapse from '../components/Collapse';
import './About.css';

function About() {
  const [isOpenFiability, setIsOpenFiability] = useState(false);
  const [isOpenRespect, setIsOpenRespect] = useState(false);
  const [isOpenService, setIsOpenService] = useState(false);
  const [isOpenSecurity, setIsOpenSecurity] = useState(false);
  return (
    <div className="App">
      <body>
        <header>
          <div>
            <Navbar />
          </div>
        </header>
        <div>
          <img className="imgAbout" src="./about.png" alt="montagne" />
        </div>
        <div className="aboutContent">
          <div className="section">
            <button
              className="collapse-button"
              onClick={() => setIsOpenFiability(!isOpenFiability)}
            >
              <span className="section-title">Fiabilité</span>
              <span
                className={`icon ${isOpenFiability ? 'rotate' : ''}`}
              >
                <i className="fa-solid fa-chevron-up"></i>
              </span>
            </button>
            <Collapse isOpen={isOpenFiability}>
              <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
              </p>
            </Collapse>
          </div>
          <div className="section">
            <button
              className="collapse-button"
              onClick={() => setIsOpenRespect(!isOpenRespect)}
            >
              <span className="section-title">Respect</span>
              <span
                className={`icon ${isOpenRespect ? 'rotate' : ''}`}
              >
                <i className="fa-solid fa-chevron-up"></i>
              </span>
            </button>
            <Collapse isOpen={isOpenRespect}>
              <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
              </p>
            </Collapse>
          </div>
          <div className="section">
            <button
              className="collapse-button"
              onClick={() => setIsOpenService(!isOpenService)}
            >
              <span className="section-title">Service</span>
              <span
                className={`icon ${isOpenService ? 'rotate' : ''}`}
              >
                <i className="fa-solid fa-chevron-up"></i>
              </span>
            </button>
            <Collapse isOpen={isOpenService}>
              <p>
              La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.
              </p>
            </Collapse>
          </div>
          <div className="section">
            <button
              className="collapse-button"
              onClick={() => setIsOpenSecurity(!isOpenSecurity)}
            >
              <span className="section-title">Sécurité</span>
              <span
                className={`icon ${isOpenSecurity ? 'rotate' : ''}`}
              >
                <i className="fa-solid fa-chevron-up"></i>
              </span>
            </button>
            <Collapse isOpen={isOpenSecurity}>
              <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
              </p>
            </Collapse>
          </div>
        </div>
        <footer>
          <div>
            <Footer />
          </div>
        </footer>
      </body>
    </div>
  );
}

export default About;
