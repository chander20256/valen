import React, { useMemo, useEffect, useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

/* 🧸 TEDDY COLORS */
const teddyColors = [
  "rgba(196,154,108,0.35)",
  "rgba(225,188,146,0.35)",
  "rgba(174,129,90,0.3)",
];

const generateTeddies = (count) =>
  Array.from({ length: count }).map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 2.5}s`,
    size: Math.random() * 14 + 16,
  }));

const TeddyHero = () => {
  const teddies = useMemo(() => generateTeddies(26), []);
  const lastDropTime = useRef(0);

  /* 🧸 TEDDY DROPS ON CURSOR MOVE */
  useEffect(() => {
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastDropTime.current < 260) return;
      lastDropTime.current = now;

      const layer = document.getElementById("teddy-layer");
      if (!layer) return;

      const safeX = Math.min(Math.max(e.clientX, 30), window.innerWidth - 30);

      const teddy = document.createElement("span");
      teddy.textContent = "🧸";
      teddy.style.position = "absolute";
      teddy.style.left = `${safeX}px`;
      teddy.style.top = `${e.clientY}px`;
      teddy.style.pointerEvents = "none";
      teddy.style.fontSize = "22px";
      teddy.style.opacity = "0.95";
      teddy.style.transform = "translateX(-50%)";
      teddy.style.transition =
        "transform 3.5s ease-in-out, opacity 3.5s linear";

      layer.appendChild(teddy);
      teddy.getBoundingClientRect();

      teddy.style.transform =
        `translateX(-50%) translateY(${window.innerHeight}px)`;
      teddy.style.opacity = "0";

      setTimeout(() => teddy.remove(), 3600);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#fff1e6] via-[#fde2cf] to-[#f9cdb4] pt-32 pb-40">

      {/* 🧸 DROP LAYER */}
      <div id="teddy-layer" className="fixed inset-0 pointer-events-none z-40" />

      {/* 🧸 BACKGROUND TEDDY IMAGES */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/video/WhatsApp_Image_2026-02-09_at_4.30.43_PM-removebg-preview.png"
          alt="Teddy Left"
          className="absolute left-[6%] top-1/2 -translate-y-1/2
                     w-[200px] sm:w-[260px] md:w-[320px]
                     rotate-[-5deg]"
        />
        <img
          src="/video/WhatsApp Image 2026-02-09 at 4.34.17 PM.jpeg"
          alt="Teddy Right"
          className="absolute right-[6%] top-1/2 -translate-y-1/2
                     w-[200px] sm:w-[260px] md:w-[320px]
                      rotate-[5deg]"
        />
      </div>

      {/* 💖 MAIN ROMANTIC TEXT */}
      <div className="relative z-30 text-center mt-6 px-6">
        <h2 className="text-[42px] sm:text-[56px] md:text-[72px]
                       font-extrabold tracking-[0.18em]
                       text-[#b07a4b]/80">
          YOU ARE
        </h2>

        <h1 className="mt-4 text-[48px] sm:text-[64px] md:text-[88px]
                       font-extrabold tracking-[0.14em]
                       text-[#8b5a35]/90">
          MY COMFORT
        </h1>

        {/* 💌 EMOTIONAL PARAGRAPH */}
        <p className="mt-8 max-w-2xl mx-auto
                      text-[#7a4a2a] text-sm sm:text-base
                      leading-relaxed">
          In a world that gets loud and heavy,  
          you are my quiet place.  
          When I feel tired, lost, or unsure,  
          your presence feels like home.
        </p>

        <p className="mt-4 italic text-[#9c6b43] text-sm">
          You don’t fix everything —  
          you just make everything feel lighter.
        </p>
      </div>

      {/* ✨ LOTTIE TEDDY (EMOTIONAL POSITION) */}
      <div
        className="relative z-20 mx-auto mt-6
                   w-[180px] sm:w-[240px] md:w-[300px]
                   opacity-90 pointer-events-none"
      >
        <DotLottieReact
          src="https://lottie.host/6ccac71a-5135-48dd-85f3-ce8bc8ba3adc/FoLIhlPZzE.lottie"
          loop
          autoplay
        />
      </div>

      {/* 🤍 WHISPER LINE UNDER TEDDY */}
      <p className="relative z-30 mt-4 text-center text-[#8b5a35] text-sm italic">
        If I could give you a hug forever,  
        I would never let go.
      </p>

      {/* 🧸 SIDE HIGHLIGHT LINES */}
      <div className="absolute inset-0 pointer-events-none z-20">

        <div className="absolute left-[6%] top-[70%]
                        max-w-[240px]
                        bg-white/40 backdrop-blur-md
                        border border-white/30
                        rounded-2xl px-5 py-4
                        text-[#7a4a2a] text-sm shadow-lg
                        animate-[fadeFloat_6s_ease-in-out_infinite]">
          <p className="font-semibold text-[#8b5a35]">
            Happy Teddy Day 🧸
          </p>
          <p className="mt-2">
            Whenever you hug this teddy,  
            remember — it carries my warmth.
          </p>
        </div>

        <div className="absolute right-[6%] top-[72%]
                        max-w-[260px]
                        bg-white/40 backdrop-blur-md
                        border border-white/30
                        rounded-2xl px-5 py-4
                        text-[#7a4a2a] text-sm shadow-lg
                        animate-[fadeFloat_7s_ease-in-out_infinite]">
          <p className="font-semibold text-[#8b5a35]">
            Just between us 🤍
          </p>
          <p className="mt-2">
            Do you feel a little closer to me  
            when you hold it?
          </p>
          <p className="mt-2 italic text-xs text-[#a46a3d]">
            I hope it makes you smile.
          </p>
        </div>
      </div>

      {/* 🧸 FLOATING TEDDIES */}
      <div className="absolute inset-0 pointer-events-none">
        {teddies.map((t, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              top: t.top,
              left: t.left,
              fontSize: `${t.size}px`,
              animation: "floatSoft 9s ease-in-out infinite",
              animationDelay: t.delay,
              opacity: 0,
            }}
          >
            🧸
          </span>
        ))}
      </div>

      {/* 🎞️ ANIMATIONS */}
      <style>{`
        @keyframes floatSoft {
          0% { transform: translateY(20px); opacity: 0; }
          50% { opacity: 0.6; }
          100% { transform: translateY(-100px); opacity: 0; }
        }

        @keyframes fadeFloat {
          0%,100% { transform: translateY(0); opacity: 0.7; }
          50% { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default TeddyHero;
