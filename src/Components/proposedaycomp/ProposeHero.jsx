import React, { useMemo, useEffect, useRef } from "react";

/* ❤️ HEART COLORS */
const heartColors = [
  "rgba(244,63,94,0.35)",
  "rgba(251,113,133,0.35)",
  "rgba(225,29,72,0.3)",
];

const generateHearts = (count) =>
  Array.from({ length: count }).map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 2}s`,
    size: Math.random() * 14 + 14,
    color: heartColors[Math.floor(Math.random() * heartColors.length)],
  }));

const ProposeHero = () => {
  const hearts = useMemo(() => generateHearts(32), []);
  const name = "my forever person ❤️";
  const lastDropTime = useRef(0);

  /* 💖 HEART DROPS ON CURSOR MOVE */
  useEffect(() => {
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastDropTime.current < 220) return;
      lastDropTime.current = now;

      const layer = document.getElementById("heart-layer");
      if (!layer) return;

      const safeX = Math.min(
        Math.max(e.clientX, 30),
        window.innerWidth - 30
      );

      const startY = e.clientY;

      const heart = document.createElement("span");
      heart.textContent = "💖";
      heart.style.position = "absolute";
      heart.style.left = `${safeX}px`;
      heart.style.top = `${startY}px`;
      heart.style.pointerEvents = "none";
      heart.style.fontSize = "22px";
      heart.style.opacity = "0.9";
      heart.style.transform = "translateX(-50%)";
      heart.style.transition =
        "transform 3s ease-in, opacity 3s linear";

      layer.appendChild(heart);
      heart.getBoundingClientRect();

      const fallDistance = window.innerHeight - startY;
      heart.style.transform =
        `translateX(-50%) translateY(${fallDistance}px)`;
      heart.style.opacity = "0";

      setTimeout(() => heart.remove(), 3200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  /* 🔝 SCROLL TO TOP */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 pt-32 pb-40">
      {/* ↑↑ bottom padding FIXED */}

      {/* 💖 HEART DROP LAYER */}
      <div
        id="heart-layer"
        className="fixed inset-0 pointer-events-none z-40"
      />

      {/* 💍 BACKGROUND IMAGE */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <img
          src="/New folder/WhatsApp Image 2026-02-06 at 10.33.08 PM (9).jpeg"
          alt="Ring"
          className="
            max-w-[80%] max-h-[80%]
            object-contain
            opacity-20
            rotate-[-6deg]
            blur-[1px]
            saturate-110
          "
        />
      </div>

      {/* ❤️ FLOATING HEARTS */}
      <div className="absolute inset-0 pointer-events-none">
        {hearts.map((heart, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              top: heart.top,
              left: heart.left,
              color: heart.color,
              fontSize: `${heart.size}px`,
              animation: "floatUp 7s linear infinite",
              animationDelay: heart.delay,
              opacity: 0,
            }}
          >
            ❤
          </span>
        ))}
      </div>

      {/* 💍 HERO TEXT */}
      <div className="relative z-10 text-center">
        <h1 className="text-[26px] sm:text-[32px] md:text-[38px] font-semibold tracking-[0.4em] uppercase text-rose-600/70">
          Propose
        </h1>
      </div>

      {/* 💖 PROPOSE WORDS */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 px-6 mt-14 max-w-6xl mx-auto">
        <div className="text-[64px] sm:text-[90px] md:text-[120px] font-extrabold tracking-[0.25em] text-rose-600/80">
          WILL
        </div>
        <div className="text-[64px] sm:text-[90px] md:text-[120px] font-extrabold tracking-[0.25em] text-pink-600/80">
          YOU
        </div>
        <div className="text-[64px] sm:text-[90px] md:text-[120px] font-extrabold tracking-[0.25em] text-rose-600/80">
          BE
        </div>
      </div>

      {/* 💌 MESSAGE */}
      <div className="relative z-10 max-w-2xl mx-auto mt-24 text-center px-6">
        <p className="text-rose-600 text-sm uppercase tracking-widest">
          This question is for
        </p>

        <p className="mt-4 text-rose-700 text-[26px] sm:text-[34px] md:text-[42px] font-extrabold">
          {name}
        </p>

        <p className="mt-8 text-rose-600 text-sm sm:text-base leading-relaxed">
          From small moments to forever dreams,  
          I don’t want a perfect life —  
          I want a life with you.
        </p>

        <p className="mt-10 italic text-rose-600 text-sm">
          “Love is not found. It is chosen.”
        </p>
      </div>

      {/* 💖 FLOAT KEYFRAMES */}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(20px); opacity: 0; }
          30% { opacity: 0.6; }
          70% { opacity: 0.6; }
          100% { transform: translateY(-90px); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default ProposeHero;
