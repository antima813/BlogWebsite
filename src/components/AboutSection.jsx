import { Link } from "react-router-dom";
import about from "../assets/images/about.jpg";

function AboutSection() {
  return (
    <section className="about">

      <div className="container about-container">

        {/* Left Image */}
        <div className="about-image">
          <img src={about} alt="About InkVerse" />
        </div>

        {/* Right Content */}
        <div className="about-content">

          <span>ABOUT US</span>

          <h2>
            Every Story Has
            <br />
            A Purpose.
          </h2>

          <p>
            Welcome to <strong>InkVerse</strong>, where creativity meets
            storytelling. Our mission is to inspire readers through
            meaningful articles on technology, travel, lifestyle and
            personal growth.
          </p>

          <p>
            We believe that every blog should educate, inspire and leave
            readers with something valuable to take away.
          </p>

          <Link to="/about">
            <button className="about-btn">
              Read More
            </button>
          </Link>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;