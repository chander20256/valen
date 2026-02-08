import React, { useEffect } from "react";
import Navbar from "../Components/Globalcomp/Navbar";
import ChocolateTreats from "../Components/chocolatecomp/ChocolateTreats";
import ChocolateVideoMoment from "../Components/chocolatecomp/ChocolateVideoMoment";
import ChocolateHero from "../Components/chocolatecomp/ChocolateHero";

const ChocolateDay = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#2a160d] via-[#3b2418] to-[#1a0e09]">
      <Navbar />

      {/* 🍫 HERO SECTION */}
      <ChocolateHero />

      {/* 🎥 VIDEO MOMENT (FIXED SIZE + AUTO SCROLL) */}
      <ChocolateVideoMoment />

      {/* 🍬 SWEET SECTION */}
      <ChocolateTreats />
    </section>
  );
};

export default ChocolateDay;
