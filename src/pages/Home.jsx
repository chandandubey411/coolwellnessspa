import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className="page-fade-in">
      <Hero />
      <About isPreview={true} />
      <Services isPreview={true} />
      <Pricing />
      <Gallery />
      <Testimonials />
    </div>
  );
};

export default Home;
