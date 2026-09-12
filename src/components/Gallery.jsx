function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="section-heading">
        <p className="section-tagline">Our Farm</p>

        <h2>A Glimpse From Our Farm</h2>

        <p>
          Take a look at our farm, our mango trees, and the care that goes
          into growing our mangoes.
        </p>
      </div>

      <div className="gallery-grid">
        <div className="gallery-item">Farm Photo</div>
        <div className="gallery-item">Mango Trees</div>
        <div className="gallery-item">Fresh Mangoes</div>
        <div className="gallery-item">Harvest Time</div>
      </div>
    </section>
  );
}

export default Gallery;