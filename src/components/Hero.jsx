import { Link } from "react-router-dom";
import hero from "../assets/images/hero.jpeg";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="hero-overlay">

        <div className="container">

          <div className="hero-content">

            <span>WELCOME TO INKVERSE</span>

            <h1>
              Discover Stories
              <br />
              That Inspire
              <br />
              Every Day.
            </h1>

            <p>
              Explore beautiful articles on lifestyle,
              travel, technology, fashion and creativity.
            </p>

            <Link to="/blogs">
              <button>Explore Blogs →</button>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;