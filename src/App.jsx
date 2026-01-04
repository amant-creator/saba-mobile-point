import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StackingCards from './components/StackingCards';
import Services from './components/Services';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <StackingCards />
      <Services />
      <Products />
      <WhyChooseUs />
      <Contact />
      <Footer />
      <WhatsAppFAB />
    </>
  );
}

export default App;
