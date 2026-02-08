import React, { useMemo, useEffect, useRef } from "react";

/* 🍫 CHOCOLATE COLORS */
const chocoColors = [
  "rgba(120,72,48,0.35)",
  "rgba(92,51,34,0.35)",
  "rgba(150,93,63,0.3)",
];

const generateChocos = (count) =>
  Array.from({ length: count }).map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 2}s`,
    size: Math.random() * 14 + 14,
    color: chocoColors[Math.floor(Math.random() * chocoColors.length)],
  }));

const ChocolateHero = () => {
  const chocos = useMemo(() => generateChocos(30), []);
  const name = "my sweet forever 🍫";
  const lastDropTime = useRef(0);

  /* 🍫 CHOCOLATE DROPS ON CURSOR MOVE */
  useEffect(() => {
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastDropTime.current < 220) return;
      lastDropTime.current = now;

      const layer = document.getElementById("choco-layer");
      if (!layer) return;

      const safeX = Math.min(
        Math.max(e.clientX, 30),
        window.innerWidth - 30
      );

      const startY = e.clientY;

      const choco = document.createElement("span");
      choco.textContent = "🍫";
      choco.style.position = "absolute";
      choco.style.left = `${safeX}px`;
      choco.style.top = `${startY}px`;
      choco.style.pointerEvents = "none";
      choco.style.fontSize = "22px";
      choco.style.opacity = "0.9";
      choco.style.transform = "translateX(-50%)";
      choco.style.transition =
        "transform 3s ease-in, opacity 3s linear";

      layer.appendChild(choco);
      choco.getBoundingClientRect();

      const fallDistance = window.innerHeight - startY;
      choco.style.transform =
        `translateX(-50%) translateY(${fallDistance}px)`;
      choco.style.opacity = "0";

      setTimeout(() => choco.remove(), 3200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  /* 🔝 SCROLL RESET */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#2b1a12] via-[#3b2418] to-[#1a0e09] pt-32 pb-40">

      {/* 🍫 DROP LAYER */}
      <div
        id="choco-layer"
        className="fixed inset-0 pointer-events-none z-40"
      />

      {/* 🍫 BACKGROUND IMAGE */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <img
          src="New folder/WhatsApp Image 2026-02-06 at 10.33.08 PM (7).jpeg"
          alt="Chocolate"
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

      {/* 🍫 FLOATING CHOCOS */}
      <div className="absolute inset-0 pointer-events-none">
        {chocos.map((c, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              top: c.top,
              left: c.left,
              color: c.color,
              fontSize: `${c.size}px`,
              animation: "floatUp 7s linear infinite",
              animationDelay: c.delay,
              opacity: 0,
            }}
          >
            🍫
          </span>
        ))}
      </div>

      {/* 🍫 HERO TITLE */}
      <div className="relative z-10 text-center">
        <h1 className="text-[26px] sm:text-[32px] md:text-[38px] font-semibold tracking-[0.4em] uppercase text-[#c7a17a]/70">
          Chocolate
        </h1>
      </div>

      {/* 🍫 BIG WORDS */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 px-6 mt-14 max-w-6xl mx-auto">
        <div className="text-[60px] sm:text-[90px] md:text-[110px] font-extrabold tracking-[0.25em] text-[#d4a373]/80">
          SWEET
        </div>
        <div className="text-[60px] sm:text-[90px] md:text-[110px] font-extrabold tracking-[0.25em] text-[#c7a17a]/80">
          LIKE
        </div>
        <div className="text-[60px] sm:text-[90px] md:text-[110px] font-extrabold tracking-[0.25em] text-[#b08968]/80">
          YOU
        </div>
      </div>

      {/* 🍫 MESSAGE */}
      <div className="relative z-10 max-w-2xl mx-auto mt-24 text-center px-6">
        <p className="text-[#d4a373] text-sm uppercase tracking-widest">
          This sweetness is for
        </p>

        <p className="mt-4 text-[#f3d5b5] text-[26px] sm:text-[34px] md:text-[42px] font-extrabold">
          {name}
        </p>

        <p className="mt-8 text-[#e6ccb2] text-sm sm:text-base leading-relaxed">
          Like chocolate, you melt my worries,  
          sweeten my days,  
          and make life irresistible.
        </p>

        <p className="mt-10 italic text-[#d4a373] text-sm">
          “Some sweetness stays forever.”
        </p>
      </div>

      {/* 🍫 FLOAT KEYFRAMES */}
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

export default ChocolateHero;
