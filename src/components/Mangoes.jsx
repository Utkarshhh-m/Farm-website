/*const mangoes = [
  {
    name: "Alphonso",
    description:
      "Known for its rich sweetness, smooth texture, and beautiful golden color.",
    season: "April - June",
  },
  {
    name: "Kesar",
    description:
      "A naturally sweet mango with a distinctive aroma and bright saffron-colored flesh.",
    season: "April - May",
  },
  {
    name: "Dasheri",
    description:
      "A juicy and aromatic variety loved for its sweet and refreshing taste.",
    season: "June - July",
  },
];

function Mangoes() {
  return (
    <section id="mangoes" className="mangoes">
      <div className="section-heading">
        <p className="section-tagline">Our Mangoes</p>

        <h2>Discover Our Mango Varieties</h2>

        <p>Every variety has its own unique taste, aroma, and character.</p>
      </div>
 
      <div className="mango-grid">
        {mangoes.map((mango) => (
          <div className="mango-card" key={mango.name}>
            <img src={mango.image} alt={mango.name} />
            <h3>{mango.name}</h3>

            <p>{mango.description}</p>

            <span>Season: {mango.season}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Mangoes;
 */

const mangoes = [
  {
    name: "Alphonso",
    season: "April – June",
    description:
      "Rich, creamy and wonderfully aromatic, with a naturally sweet taste.",
    image:
      "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=85",
    tag: "Customer Favourite",
  },
  {
    name: "Kesar",
    season: "April – May",
    description:
      "A vibrant golden mango loved for its sweet flavour and fruity aroma.",
    image:
      "https://images.unsplash.com/photo-1605027990121-cbae9f7c4d3f?auto=format&fit=crop&w=800&q=85",
    tag: "Golden Delight",
  },
  {
    name: "Dasheri",
    season: "June – July",
    description:
      "Delightfully sweet, fragrant and perfect for enjoying in summer.",
    image:
      "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=800&q=85",
    tag: "Summer Favourite",
  },
];

function Mangoes() {
  const phoneNumber = "918381042845";

  return (
    <section id="mangoes" className="mangoes">
      <div className="section-heading">
        <p className="section-tagline">A LITTLE TASTE OF SUMMER</p>

        <h2>Meet Our Mangoes</h2>

        <p className="mangoes-intro">
          Every mango has its own personality. Find the flavour that makes your
          summer special.
        </p>
      </div>

      <div className="mango-grid">
        {mangoes.map((mango) => {
          const message = `Hello! I would like to enquire about ${mango.name} mangoes. Please share the current price and availability.`;

          const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

          return (
            <article className="mango-card" key={mango.name}>
              <div className="mango-image-wrapper">
                <img
                  src={mango.image}
                  alt={`${mango.name} mangoes`}
                  className="mango-image"
                  loading="lazy"
                />

                <span className="mango-tag">{mango.tag}</span>
              </div>

              <div className="mango-card-content">
                <p className="mango-season">
                  <span className="season-dot"></span>
                  Season: {mango.season}
                </p>

                <h3>{mango.name}</h3>

                <p className="mango-description">{mango.description}</p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mango-order-btn"
                >
                  Enquire on WhatsApp <span>↗</span>
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Mangoes;
