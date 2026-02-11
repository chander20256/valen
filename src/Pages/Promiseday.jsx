import React, { useEffect } from "react";
import Navbar from "../Components/Globalcomp/Navbar";
import PromiseHero from "../Components/promisedaycomp/PromiseHero";
import PromiseVows from "../Components/Promisedaycomp/PromiseVows";
import PromiseReality from "../Components/Promisedaycomp/PromiseReality";

const Promiseday = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200">
      <Navbar />

      {/* 🤍 HERO ONLY */}
      <PromiseHero />
      <PromiseVows/>
      <PromiseReality/>
    </section>
  );
};

export default Promiseday;
