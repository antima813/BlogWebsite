import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Categories from "../components/Categories";
import AboutSection from "../components/AboutSection";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Categories />
      <AboutSection />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;