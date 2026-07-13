function Contact() {
  return (
    <section className="contact-page">
      <div className="container">

        <div className="section-title">
          <span>CONTACT US</span>
          <h2>Get In Touch</h2>
          <p>
            We'd love to hear from you. Fill out the form below and
            we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="contact-container">

          <div className="contact-info">

            <h3>Contact Information</h3>

            <p>📍 India</p>
            <p>📧 hello@inkverse.com</p>
            <p>📞 +91 9876543210</p>

          </div>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;