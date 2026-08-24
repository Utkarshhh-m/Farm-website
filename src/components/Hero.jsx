function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-tagline">Fresh • Natural • Farm Grown</p>

        <h1>Fresh Mangoes, Straight From Our Farm 🥭</h1>

        <p className="hero-description">
          Naturally grown mangoes, cultivated with care and delivered with
          freshness.
        </p>

        <button>Explore Our Mangoes</button>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=900&q=80"
          alt="Fresh mangoes"
        />
      </div>
    </section>
  );
}

export default Hero;
