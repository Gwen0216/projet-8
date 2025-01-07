import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Api from '../components/Api'; 
import Slideshow from '../components/Slideshow';
import Title from "../components/Title";
import Profil from "../components/Profil";
import Description from "../components/Description";
import { useParams, useNavigate } from "react-router-dom";
import "./Location.css";

function Location () {
  const { id } = useParams();
  const navigate = useNavigate();
  const [locations, setLocation] = useState([]);  
  const [loading, setLoading] = useState(true);  

    
    useEffect(() => {
      Api.getLoc()
        .then(data => {
          const selectedLocation = data.find(loc => loc.id === id);
          if (!selectedLocation) {
            navigate("/error");
          } else {
            setLocation(selectedLocation); 
          }
          setLoading(false);
        })
        .catch(error => {
          console.error("Erreur lors de la récupération des données : ", error);
          navigate("/error");
        });
    }, [id, navigate]);  

    
    if (loading) {
        return <div>Chargement...</div>;
    }
return (
     <div>
      <header>
       <div>
        <Navbar />
       </div>
      </header>
      <div>
      <Slideshow 
        pictures={locations.pictures} 
        title={locations.title}
        />
      </div>
      <div className="container">
      <div>
          <Title
            title={locations.title || "Titre non disponible"}
            location={locations.location || "Localisation inconnue"}
            tags={locations.tags || []}
          />
        </div>
        <div>
          <Profil 
            name={locations.host?.name || "Nom non disponible"}
            picture={locations.host?.picture || ""}
            rating={locations.rating || 0}
          />
        </div>
      </div>
      <div>
        <Description
          description={locations.description || "Description non disponible"}
          equipments={locations.equipments || []}
        />
      </div>
      <footer>
        <div>
          <Footer />
        </div>
        </footer>
      </div>
)
}

export default Location;