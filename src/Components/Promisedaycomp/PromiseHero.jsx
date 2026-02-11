import React, { useMemo, useEffect, useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

/* 🤍 PROMISE COLORS */
const promiseColors = [
  "rgba(255,255,255,0.45)",
  "rgba(253,230,238,0.45)",
  "rgba(248,200,215,0.35)",
];

const generatePromises = (count) =>
  Array.from({ length: count }).map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 2.5}s`,
    size: Math.random() * 14 + 14,
  }));

const PromiseHero = () => {
  const promises = useMemo(() => generatePromises(26), []);
  const lastDropTime = useRef(0);

  /* 🤍 PROMISE DROPS ON CURSOR MOVE */
  useEffect(() => {
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastDropTime.current < 260) return;
      lastDropTime.current = now;

      const layer = document.getElementById("promise-layer");
      if (!layer) return;

      const safeX = Math.min(Math.max(e.clientX, 20), window.innerWidth - 20);

      const heart = document.createElement("span");
      heart.textContent = "🤍";
      heart.style.position = "absolute";
      heart.style.left = `${safeX}px`;
      heart.style.top = `${e.clientY}px`;
      heart.style.pointerEvents = "none";
      heart.style.fontSize = "20px";
      heart.style.opacity = "0.9";
      heart.style.transform = "translateX(-50%)";
      heart.style.transition =
        "transform 3.5s ease-in-out, opacity 3.5s linear";

      layer.appendChild(heart);
      heart.getBoundingClientRect();

      heart.style.transform =
        `translateX(-50%) translateY(${window.innerHeight}px)`;
      heart.style.opacity = "0";

      setTimeout(() => heart.remove(), 3600);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden
                 bg-gradient-to-br from-[#fff5f8] via-[#fde7ee] to-[#f7cfdc]
                 pt-28 sm:pt-32 pb-32 sm:pb-40"
    >
      {/* 🤍 DROP LAYER */}
      <div
        id="promise-layer"
        className="fixed inset-0 pointer-events-none z-40"
      />

      {/* 🤍 BACKGROUND SYMBOLS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        <img
          src="/New folder/WhatsApp Image 2026-02-11 at 4.30.15 PM (1).jpeg"
          alt="Promise Left"
          className="absolute left-[6%] top-1/2 -translate-y-1/2
                     w-[260px] lg:w-[320px]
                     opacity-80 rotate-[-6deg]"
        />
        <img
          src="/New folder/WhatsApp Image 2026-02-11 at 4.30.15 PM.jpeg"
          alt="Promise Right"
          className="absolute right-[6%] top-1/2 -translate-y-1/2
                     w-[260px] lg:w-[320px]
                     opacity-80 rotate-[6deg]"
        />
      </div>

      {/* 🤍 MAIN CONTENT */}
      <div className="relative z-30 text-center px-6 max-w-3xl mx-auto">
        <h2
          className="text-[40px] sm:text-[54px] md:text-[70px]
                     font-extrabold tracking-[0.3em]
                     text-rose-400/90"
        >
          I PROMISE
        </h2>

        <h1
          className="mt-4 text-[50px] sm:text-[70px] md:text-[96px]
                     font-extrabold tracking-[0.22em]
                     text-rose-600"
        >
          TO STAY
        </h1>

        {/* ❤️ LOTTIE (WHITE BG REMOVED VIA BLEND MODE) */}
        <div
          className="relative mx-auto mt-10 mb-10
                     w-[180px] sm:w-[240px] md:w-[320px]
                     pointer-events-none
                     mix-blend-multiply"
        >
          <DotLottieReact
            src="https://lottie.host/6f652751-0c84-4bd3-bce4-14dce2d2175d/nopBpgPEBz.lottie"
            loop
            autoplay
          />
        </div>

        {/* 🔒 BIGGEST PROMISE */}
        <p
          className="text-[20px] sm:text-[26px] md:text-[30px]
                     font-extrabold text-rose-700 leading-relaxed"
        >
          At any cost.<br />
          In any circumstance.<br />
          <span className="text-rose-800">
            I promise I will never leave you.
          </span>
        </p>

        <p className="mt-6 italic text-rose-500 text-sm sm:text-base">
          This is not a moment — it’s a decision.
        </p>
      </div>

      {/* 🤍 SIDE PROMISE CARDS */}
      <div className="absolute inset-0 pointer-events-none z-20 hidden lg:block">
        <div
          className="absolute left-[6%] top-[72%]
                     max-w-[240px]
                     bg-white/45 backdrop-blur-md
                     border border-white/30
                     rounded-2xl px-5 py-4
                     text-rose-600 text-sm shadow-lg
                     animate-[fadeFloat_6s_ease-in-out_infinite]"
        >
          <p className="font-semibold text-rose-700">
            Happy Promise Day 🤍
          </p>
          <p className="mt-2">
            No matter how things change,  
            my intentions won’t.
          </p>
        </div>

        <div
          className="absolute right-[6%] top-[74%]
                     max-w-[260px]
                     bg-white/45 backdrop-blur-md
                     border border-white/30
                     rounded-2xl px-5 py-4
                     text-rose-600 text-sm shadow-lg
                     animate-[fadeFloat_7s_ease-in-out_infinite]"
        >
          <p className="font-semibold text-rose-700">
            Just between us 🤍
          </p>
          <p className="mt-2">
            Even on quiet days,  
            I’m still choosing you.
          </p>
          <p className="mt-2 italic text-xs text-rose-400">
            Always.
          </p>
        </div>
      </div>

      {/* 🤍 FLOATING PROMISE SYMBOLS */}
      <div className="absolute inset-0 pointer-events-none">
        {promises.map((p, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              top: p.top,
              left: p.left,
              fontSize: `${p.size}px`,
              animation: "floatSoft 9s ease-in-out infinite",
              animationDelay: p.delay,
              opacity: 0,
            }}
          >
            🤍
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

export default PromiseHero;
