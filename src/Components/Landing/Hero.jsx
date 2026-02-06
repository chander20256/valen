


import React, { useEffect, useMemo, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom";

/* ---------------- HEART CONFIG ---------------- */
const heartColors = [
  "rgba(255, 105, 135, 0.6)",
  "rgba(255, 182, 193, 0.6)",
  "rgba(255, 140, 160, 0.6)",
  "rgba(220, 20, 60, 0.55)",
  "rgba(255, 160, 180, 0.6)",
];

const getHeartCount = () => {
  if (window.innerWidth < 480) return 20;
  if (window.innerWidth < 768) return 26;
  if (window.innerWidth < 1024) return 26;
  return 36;
};

const generateHeartPositions = (count) => {
  const isMobile = window.innerWidth < 768;

  return Array.from({ length: count }).map(() => {
    let top, left;

    do {
      top = Math.random() * 100;
      left = Math.random() * 100;
    } while (
      !isMobile &&
      top > 38 && top < 62 &&
      left > 25 && left < 75
    );

    return {
      top: `${top}%`,
      left: `${left}%`,
      delay: `${Math.random() * 6}s`,
      color: heartColors[Math.floor(Math.random() * heartColors.length)],
    };
  });
};

const Hero = () => {
  const navigate = useNavigate(); // ✅ FIXED (must be inside component)

  const [heartCount, setHeartCount] = useState(0);

  useEffect(() => {
    setHeartCount(getHeartCount());
  }, []);

  const hearts = useMemo(
    () => generateHeartPositions(heartCount),
    [heartCount]
  );

  return (
    <section
    id="/home"
      className="
        relative min-h-screen w-full overflow-hidden
        bg-gradient-to-br from-pink-100 to-rose-200
        pt-40 sm:pt-44
        md:pt-0 md:flex md:items-center md:justify-center
      "
    >
      {/* ================= HEART ANIMATION ================= */}
      <style>{`
        @keyframes floatFadeUp {
          0% { transform: translateY(12px); opacity: 0; }
          20% { opacity: 0.5; }
          80% { opacity: 0.5; }
          100% { transform: translateY(-48px); opacity: 0; }
        }
      `}</style>

      {/* ================= DECORATIVE IMAGES ================= */}
      {/* BIG IMAGE (TOP RIGHT) */}
<div
  className="absolute top-[6vh] right-[4vw] md:top-[10vh] md:right-[6vw]
    w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64
    bg-white border border-gray-300 shadow-xl rounded-2xl rotate-[6deg]
    overflow-hidden
    flex items-center justify-center z-10"
>
  <img
    src="New folder\WhatsApp Image 2026-02-06 at 10.33.08 PM (2).jpeg"
    alt="Love memory"
    className="w-full h-full object-cover"
  />
</div>

{/* SMALL IMAGE (TOP LEFT) */}
<div
  className="absolute top-[18vh] left-[4vw] md:top-[16vh] md:left-[6vw]
    w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44
    bg-white border border-gray-300 shadow-lg rounded-xl rotate-[-8deg]
    overflow-hidden
    flex items-center justify-center z-10"
>
  <img
    src="New folder\WhatsApp Image 2026-02-06 at 10.33.08 PM (3).jpeg"
    alt="Sweet moment"
    className="w-full h-full object-cover"
  />
</div>

{/* SMALL IMAGE (BOTTOM LEFT) */}
<div
  className="absolute bottom-[18vh] left-[6vw] md:left-[8vw]
    w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44
    bg-white border border-gray-300 shadow-lg rounded-xl rotate-[6deg]
    overflow-hidden
    flex items-center justify-center z-10"
>
  <img
    src="New folder\WhatsApp Image 2026-02-06 at 10.33.08 PM (7).jpeg"
    alt="Happy memory"
    className="w-full h-full object-cover"
  />
</div>

{/* SMALL IMAGE (BOTTOM RIGHT) */}
<div
  className="absolute bottom-[20vh] right-[4vw] md:bottom-[16vh] md:right-[6vw]
    w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44
    bg-white border border-gray-300 shadow-lg rounded-xl rotate-[-6deg]
    overflow-hidden
    flex items-center justify-center z-10"
>
  <img
    src="New folder\WhatsApp Image 2026-02-06 at 10.33.08 PM (12).jpeg"
    alt="Lovely moment"
    className="w-full h-full object-cover"
  />
</div>

      {/* ================= FLOATING HEARTS ================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {hearts.map((heart, index) => (
          <span
            key={index}
            style={{
              position: "absolute",
              top: heart.top,
              left: heart.left,
              color: heart.color,
              fontSize:
                window.innerWidth < 640 ? 16 :
                window.innerWidth < 1024 ? 24 : 32,
              animation: "floatFadeUp 16s ease-in-out infinite",
              animationDelay: heart.delay,
            }}
          >
            ❤
          </span>
        ))}
      </div>

      {/* ================= TEXT CONTENT ================= */}
      <div
        className="
          relative z-20
          text-center
          px-6
          max-w-md sm:max-w-lg
          mx-auto
          mt-[38vh]
          md:mt-0
        "
      >
        <p className="mb-4 text-[11px] sm:text-xs md:text-sm tracking-[0.35em] uppercase text-rose-400">
          Valentine Week
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-rose-700 mb-4 leading-tight uppercase">
          For the one who feels like home
        </h1>

        {/* 💕 LOTTIE */}
        <div className="flex justify-center mb-6">
          <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 pointer-events-none select-none">
            <DotLottieReact
              src="https://lottie.host/857a9d55-0526-46b8-8ed9-182ebedeb1d1/RJjF4iKgM1.lottie"
              loop
              autoplay
            />
          </div>
        </div>

        <p className="text-rose-500 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
          A quiet celebration of connection,
          <br className="hidden sm:block" />
          warmth, and moments that matter.
        </p>

        {/* 🌸 CTA BUTTON */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/week")}
            className="
              px-8 py-3
              rounded-full
              bg-rose-600
              text-white
              text-sm sm:text-base
              font-medium
              shadow-lg
              transition-all duration-300
              hover:bg-rose-700
              hover:shadow-2xl
              hover:scale-[1.03]
              active:scale-95
            "
          >
            Let’s enjoy this week
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
