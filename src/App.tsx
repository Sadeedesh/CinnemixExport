import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Products from "./components/Products.tsx";
import Services from "./components/Services.tsx";
import Testimonials from "./components/Testimonials.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import CinnamonBackground from "./components/CinnamonBackground.tsx";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CinnamonBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Products />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
