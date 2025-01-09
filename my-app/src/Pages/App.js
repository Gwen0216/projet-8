import './App.css';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import bannerImage from "../images/imgbanner.png";


function App() {
  return (
     <div>
      <div>
          <Banner
           imageSrc={bannerImage}
           altText="Bannière de la page d'accueil" 
           showText={true} 
           showOverlay={true}
           />
          <Gallery />
        </div>
      </div>
  );
}

export default App;
