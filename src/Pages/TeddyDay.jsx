import React, { useEffect } from "react";
import Navbar from "../Components/Globalcomp/Navbar";
import TeddyHero from "../Components/teddydaycomp/TeddyHero";
import TeddyStories from "../Components/teddydaycomp/TeddyStories";
import MissingMe from "../Components/teddydaycomp/MissingMe";

const TeddyDay = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#fff1e6] via-[#fde2cf] to-[#f9cdb4]">
      <Navbar />

      {/* 🧸 HERO SECTION */}
      <TeddyHero />

      {/* 📖 TWO TEDDY STORIES */}
      <TeddyStories />

      {/* 🤍 IF YOU'RE EVER MISSING ME */}
      <MissingMe />
    </section>
  );
};

export default TeddyDay;
