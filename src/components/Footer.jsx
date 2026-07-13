import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        {/* Logo & About */}
        <div className="footer-box">

          <h2 className="footer-logo">InkVerse</h2>

          <p>
            Discover inspiring stories, technology updates,
            travel experiences and lifestyle articles written
            with passion.
          </p>

        </div>

        {/* Quick Links */}
        <div className="footer-box">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

        </div>

        {/* Categories */}
        <div className="footer-box">

          <h3>Categories</h3>

          <a href="#">Technology</a>
          <a href="#">Travel</a>
          <a href="#">Lifestyle</a>
          <a href="#">Food</a>

        </div>

        {/* Contact */}
        <div className="footer-box">

          <h3>Contact</h3>

          <p>Email : hello@inkverse.com</p>
          <p>Phone : +91 9876543210</p>
          <p>India</p>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 InkVerse | All Rights Reserved
      </div>

    </footer>
  );
}

export default Footer;