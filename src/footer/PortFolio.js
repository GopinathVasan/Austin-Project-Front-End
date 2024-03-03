import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Ourpeople from "../assets/0.jpg";
import Hero from "../Components/Hero";

function portfolio() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={Ourpeople}
        title="Our People"
        text=""
        btnClass="hide"
      />
      <Data />
      <Footer />
    </>
  );
}
export default portfolio;