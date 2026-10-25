/*function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">FRESH FROM OUR FARM</p>

        <h1>Naturally Grown, Delicious Mangoes</h1>

        <p className="hero-description">
          From our farm to your table. Fresh, naturally grown mangoes cultivated
          with care.
        </p>

        <div className="hero-buttons">
          <button>Explore Our Mangoes</button>
          <button>Contact Us</button>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1553279768-865429fa0078"
          alt="Fresh mangoes"
        />
      </div>
    </section>
  );
}

export default Hero;
*/

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-subtitle">FRESH FROM OUR FARM</p>

        <h1>
          A Little Taste of <span>Sunshine.</span>
        </h1>

        <p className="hero-description">
          Discover naturally grown mangoes, nurtured with care and harvested to
          bring a little sweetness to your day.
        </p>

        <div className="hero-buttons">
          <a href="#mangoes" className="hero-btn hero-btn-primary">
            Explore Our Mangoes <span>→</span>
          </a>

          <a href="#about" className="hero-btn hero-btn-secondary">
            Our Farm Story
          </a>
        </div>

        <div className="hero-note">
          <span className="hero-note-icon">✳</span>
          Grown with care. Shared with love.
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-image-frame">
          <img
            src="https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=1000&q=85"
            alt="Fresh, ripe mangoes in golden sunlight"
          />
        </div>

        <div className="hero-image-badge">
          <span className="badge-icon">🥭</span>
          <div>
            <strong>Naturally Delicious</strong>
            <p>A taste worth sharing</p>
          </div>
        </div>

        <div className="hero-decoration" aria-hidden="true">
          ✳
        </div>
      </div>
    </section>
  );
}

export default Hero;
