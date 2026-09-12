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
          <p>📞 +91 XXXXX XXXXX</p>
          <p>✉️ farm@example.com</p>
          <p>📍 Your Farm Location</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Our Mango Farm. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
