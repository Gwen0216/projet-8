import React, { useEffect, useState } from "react";
import "./Gallery.css";
import GallImg from "./GallImg";
import { Link } from "react-router-dom";
import Api from './Api';  // Assurez-vous d'importer votre module API

function Gallery() {
    const [locations, setLocations] = useState([]);  
    const [loading, setLoading] = useState(true);  

    
    useEffect(() => {
        Api.getLoc()  
            .then(data => {
                setLocations(data);  
                setLoading(false);  
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des données : ", error);
                setLoading(false);  
            });
    }, []);  

    
    if (loading) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="grid">
            {locations.map((location) => (
                <Link key={location.id} to={`/location/${location.id}`}>
                    <GallImg 
                        title={location.title}  
                        cover={location.cover}  
                    />
                </Link>
            ))}
        </div>
    );
}

export default Gallery;
