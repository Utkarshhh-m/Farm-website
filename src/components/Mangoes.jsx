const mangoes = [
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
 