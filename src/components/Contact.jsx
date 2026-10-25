import { useState } from "react";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [Error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    setSubmitted(true);

    setName("");
    setEmail("");
    setMessage("");
  }
  return (
    <section id="contact" className="contact">
      <div className="section-heading">
        <p className="section-tagline">Get In Touch</p>

        <h2>Contact Our Farm</h2>

        <p>
          Have a question about our mangoes? We would love to hear from you.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setSubmitted(false);
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setSubmitted(false);
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="5"
            placeholder="Write your message..."
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setSubmitted(false);
            }}
          ></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
      {submitted && (
        <p className="success-message">
          Thank you for contacting us! Your message has been received. 🥭
        </p>
      )}
    </section>
  );
}

export default Contact;
