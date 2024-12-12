import Navbar from '../components/Navbar';
import Photo from '../components/Photo';
import Footer from '../components/Footer';

function Location () {
return (
    <div className="App">
     <body>
      <header>
       <div>
        <Navbar />
       </div>
      </header>
      <div>
        <Photo />
      </div>
      <footer>
        <div>
          <Footer />
        </div>
        </footer>
      </body>
    </div>
)
}

export default Location;