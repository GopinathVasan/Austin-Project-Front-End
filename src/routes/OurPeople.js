import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import MeetUs from "../Components/MeetUs";
import Ourpeople from "../assets/0.jpg";
import Hero from "../Components/Hero";

function OurPeople() {
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
      <MeetUs />
      <Footer />
    </>
  );
}
export default OurPeople;