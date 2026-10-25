import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import About from "./components/About";
import Mangoes from "./components/Mangoes";

import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Mangoes />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
