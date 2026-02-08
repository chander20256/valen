import React, { useEffect } from "react";
import Navbar from "../Components/Globalcomp/Navbar";
import ChocolateHero from "../Components/chocolatecomp/ChocolateHero";
import ChocolateTreats from "../Components/chocolatecomp/ChocolateTreats";


const ChocolateDay = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#2b1a12] via-[#3b2418] to-[#1a0e09]">
      <Navbar />

      {/* 🍫 CHOCOLATE DAY HERO SECTION */}
      <ChocolateHero />

      {/* 🍬 SWEET SECTION (LIKE QUESTIONS) */}
      <ChocolateTreats />
    </section>
  );
};

export default ChocolateDay;
