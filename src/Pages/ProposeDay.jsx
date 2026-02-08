import React, { useEffect } from "react";
import Navbar from "../Components/Globalcomp/Navbar";
import ProposeHero from "../Components/proposedaycomp/ProposeHero";
import ProposeVideo from "../Components/proposedaycomp/ProposeVideo";
import ProposeQuestions from "../Components/proposedaycomp/ProposeQuestions";

const ProposeDay = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200">
      <Navbar />

      {/* 💍 HERO */}
      <ProposeHero />

      {/* 🎥 VIDEO MOMENT */}
      <ProposeVideo />

      {/* 💌 QUESTIONS */}
      <ProposeQuestions />
    </section>
  );
};

export default ProposeDay;
