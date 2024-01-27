import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import AboutImg from "../assets/4.jpg";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        text="choose the wise company"
        btnClass="hide"
      />
      <Footer />
    </>
  );
}
export default Contact;
