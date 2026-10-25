function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>Our Mango Farm 🥭</h2>
          <p>
            Naturally grown mangoes, cultivated with care and delivered fresh
            from our farm to your table.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#about">About</a>
          <a href="#mangoes">Our Mangoes</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Get In Touch</h3>
          <p>📞 +91 8381042845</p>
          <p>✉️ mandharefarm@gmail.com</p>
          <a href="https://www.google.com/maps/@18.1397401,73.5753272,338m"><p> Farm Location</p></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Mandhare's Farm. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
