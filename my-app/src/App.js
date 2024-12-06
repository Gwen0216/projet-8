
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
     <body>
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
      </body>
    </div>
  );
}

export default App;
