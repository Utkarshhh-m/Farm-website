function Hero() {
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
