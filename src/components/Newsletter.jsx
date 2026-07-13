function Newsletter() {
  return (
    <section className="newsletter">

      <div className="container">

        <div className="newsletter-content">

          <span>NEWSLETTER</span>

          <h2>Stay Updated</h2>

          <p>
            Subscribe to our newsletter and receive the latest
            blogs, travel stories, technology updates and lifestyle
            tips directly in your inbox.
          </p>

          <form className="newsletter-form">

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button type="submit">
              Subscribe
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;