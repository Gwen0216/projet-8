import './App.css';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';



function App() {
  return (
     <div>
      <div>
          <Banner
           imageSrc="./images/imgbanner.png" 
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
