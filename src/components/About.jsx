function About() {
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
