import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import AboutImg from "../assets/3.jpg";
import Footer from "../Components/Footer";
import Service1 from "../Components/Service1";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Overview"
        text=""
        btnClass="hide"
      >
      </Hero>
      <Service1 />
      <Footer />
    </>
  );
}
export default Service;
