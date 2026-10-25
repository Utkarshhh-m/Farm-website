/*function Navbar() {
  return (
    <nav>
      <div>
        <h2>Mango Farm 🥭</h2>
      </div>

      <div>
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#mangoes">Mangoes</a>
        <a href="#contact">Contact</a>
        
      </div>
    </nav>
  );
}

export default Navbar;
*/

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="navbar-brand">
        <span className="brand-icon">🥭</span>
        <span className="brand-text">
          <strong>ManGrow</strong>
          <small>FRESH FROM OUR FARM</small>
        </span>
      </a>

      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about">Our Story</a>
        <a href="#mangoes">Our Mangoes</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#mangoes" className="navbar-cta">
        Explore Mangoes <span>→</span>
      </a>
    </nav>
  );
}

export default Navbar;
