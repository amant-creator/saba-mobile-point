import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StackingCards from './components/StackingCards';
import Services from './components/Services';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';
import WelcomeModal from './components/WelcomeModal';
import './App.css';

function App() {
  return (
    <>
      {/* Modal popup - appears automatically on first visit */}
      <WelcomeModal />

      {/* Main website content */}
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
