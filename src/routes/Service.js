import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import AboutImg from "../assets/3.jpg";
import Footer from "../Components/Footer";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Overview"
        text="choose the wise company"
        btnClass="hide"
      />
      <Footer />
    </>
  );
}
export default Service;
