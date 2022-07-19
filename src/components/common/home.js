import React from "react";
import "../../App.css";
import HeroSection from "./../heroSection";
import "./../heroSection.css";
import Cards from "../cards";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}
export default Home;
