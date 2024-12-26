import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Error.css';

function Error () {
  const navigate = useNavigate();
    return (
         <div>
          <header>
           <div>
            <Navbar />
           </div>
          </header>
          <div>
          <div className="errorPage">
      <h1>404 </h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <button onClick={() => navigate('/')} >
      Retourner sur la page d’accueil
      </button>
    </div>
          </div>
          <footer>
            <div>
              <Footer />
            </div>
            </footer>
          </div>
    )
    }
    
    export default Error ;