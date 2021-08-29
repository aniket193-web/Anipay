import './App.css';
import Navbar from './Navbar';
import Header  from './Header';
import HowitWorks from './HowitWorks';
import AboutUS from './AboutUS';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
function Home() {
  return (<>
    <Navbar />
    <Header />
    <HowitWorks/>
    <AboutUS/>
    <Services />
    <Contact />
    <Footer />
    </>
  );
}

export default Home;
   
