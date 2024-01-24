import React from "react";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Destination from "../Components/Destination"; // Add this line
import HomeImg from "../assets/5.jpg";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Austin Projects 2024 outlook's"
        text="The Indian Economy is on track for a soft landing in 2024. Get the Forecast from Austin Partnership Research in our 2024 Indian Economy Outlook"
        buttonText="Read The Indian Outlook"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Footer />
    </>
  );
}

export default Home;
