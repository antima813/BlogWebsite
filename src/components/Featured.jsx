import { Link } from "react-router-dom";
import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/blog2.jpg";
import blog3 from "../assets/images/blog3.jpg";

function Featured() {
  return (
    <section className="featured">

      <div className="container">

        <div className="section-title">
          <span>FEATURED STORIES</span>
          <h2>Editor's Picks</h2>
          <p>
            Discover our most loved stories selected especially
            for our readers.
          </p>
        </div>

        <div className="featured-grid">

          {/* Card 1 */}

          <div className="featured-card">

            <img src={blog1} alt="" />

            <div className="featured-content">

              <span>Technology</span>

              <h3>
                The Future of Web Development
              </h3>

              <p>
                Learn modern trends that every developer
                should know in 2026.
              </p>

              <Link to="/blog/1">
                Read More →
              </Link>

            </div>

          </div>

          {/* Card 2 */}

          <div className="featured-card">

            <img src={blog2} alt="" />

            <div className="featured-content">

              <span>Travel</span>

              <h3>
                Hidden Places You Must Visit
              </h3>

              <p>
                Explore beautiful destinations around
                the world.
              </p>

              <Link to="/blog/2">
                Read More →
              </Link>

            </div>

          </div>

          {/* Card 3 */}

          <div className="featured-card">

            <img src={blog3} alt="" />

            <div className="featured-content">

              <span>Lifestyle</span>

              <h3>
                Minimal Living for Better Life
              </h3>

              <p>
                Simple habits that make life more
                peaceful and productive.
              </p>

              <Link to="/blog/3">
                Read More →
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Featured;