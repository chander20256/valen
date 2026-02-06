import React, { useEffect } from "react";
import Navbar from "../Components/Globalcomp/Navbar";
import Hero from "../Components/Landing/Hero";
import Story from "../Components/Landing/Story";
import Moments from "../Components/Landing/Moments";
import Footer from "../Components/Globalcomp/Footer";


const LandingPage = () => {
   useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      <Moments />
      <Footer />
    </>
  );
};

export default LandingPage;
