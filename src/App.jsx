import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import About from "./components/About";
import Mangoes from "./components/Mangoes";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Mangoes />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
