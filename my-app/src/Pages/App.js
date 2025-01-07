import './App.css';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';


function App() {
  return (
     <div>
      <header>
       <div>
        <Navbar />
       </div>
      </header>
      <div>
          <Banner />
          <Gallery />
        </div>
        <footer>
        <div>
          <Footer />
        </div>
        </footer>
      </div>
  );
}

export default App;
