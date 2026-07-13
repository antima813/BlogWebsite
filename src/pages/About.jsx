import about from "../assets/images/about.jpg";

function About() {
  return (
    <section className="about-page">
      <div className="container about-page-container">

        <div className="about-page-image">
          <img src={about} alt="About" />
        </div>

        <div className="about-page-content">

          <span>ABOUT INKVERSE</span>

          <h1>We Create Stories That Matter</h1>

          <p>
            InkVerse is a modern blogging platform where ideas,
            creativity and knowledge come together. We publish
            inspiring articles about technology, travel,
            lifestyle and food.
          </p>

          <p>
            Our goal is to provide quality content that informs,
            inspires and helps readers learn something new every
            single day.
          </p>

          <p>
            Thank you for visiting our website. We hope you enjoy
            reading our blogs and become a part of our community.
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;