/*function About() {
  return (
    <section id="about" className="about">
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1605027990121-cbae9f7c4d3f?auto=format&fit=crop&w=800&q=80"
          alt="Mangoes growing on a tree"
        />
      </div>

      <div className="about-content">
        <p className="section-tagline">About Our Farm</p>

        <h2>Growing With Care, From Our Family To Yours</h2>

        <p>
          Our farm is dedicated to cultivating fresh and naturally grown mangoes
          while taking care of the land that makes it all possible.
        </p>

        <p>
          We believe good mangoes start with healthy soil, careful cultivation,
          and patience. Every season, we work to bring the natural taste of our
          farm to our customers.
        </p>
      </div>
    </section>
  );
}

export default About;
*/
function About() {
  return (
    <section id="about" className="about">
      <div className="about-visual">
        <div className="about-image-frame">
          <img
            src="https://images.unsplash.com/photo-1605027990121-cbae9f7c4d3f?auto=format&fit=crop&w=1000&q=85"
            alt="Mangoes growing in a tropical orchard"
            loading="lazy"
          />
        </div>

        <div className="about-image-caption">
          <span>🥭</span>
          <p>Rooted in nature, grown with care.</p>
        </div>
      </div>

      <div className="about-content">
        <p className="section-tagline">OUR STORY, OUR ROOTS</p>

        <h2>
          Good Things Grow
          <span> With Care.</span>
        </h2>

        <p className="about-description">
          Every mango has a journey, from the soil it grows in to the moment it
          reaches your table. We're passionate about cultivating mangoes with
          patience and care.
        </p>

        <p className="about-description">
          Our farm brings together a love for nature and the joy of sharing
          delicious seasonal mangoes. We believe that great taste begins with
          thoughtful cultivation.
        </p>

        <a href="#mangoes" className="about-link">
          Discover Our Mangoes <span>→</span>
        </a>
      </div>
    </section>
  );
}

export default About;
