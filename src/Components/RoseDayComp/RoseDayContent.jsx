// import React, { useMemo } from "react";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// /* ❤️ HEART COLORS */
// const heartColors = [
//   "rgba(244,63,94,0.35)",
//   "rgba(251,113,133,0.35)",
//   "rgba(225,29,72,0.3)",
// ];

// const generateHearts = (count) =>
//   Array.from({ length: count }).map(() => ({
//     top: `${Math.random() * 100}%`,
//     left: `${Math.random() * 100}%`,
//     delay: `${Math.random() * 2}s`,
//     size: Math.random() * 14 + 16,
//     color: heartColors[Math.floor(Math.random() * heartColors.length)],
//   }));

// const RoseDayContent = () => {
//   const hearts = useMemo(() => generateHearts(36), []);

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden">

//       {/* 🌹 BIG ROSE BACKGROUND */}
//       <div className="absolute inset-0 flex items-center justify-center opacity-[0.12] pointer-events-none">
//         <img
//           src="https://images.unsplash.com/photo-1526045478516-99145907023c"
//           alt="Rose"
//           className="w-[300px] sm:w-[420px] md:w-[520px] rotate-[-8deg]"
//         />
//       </div>

//       {/* ❤️ FLOATING HEARTS */}
//       <div className="absolute inset-0 pointer-events-none">
//         {hearts.map((heart, i) => (
//           <span
//             key={i}
//             style={{
//               position: "absolute",
//               top: heart.top,
//               left: heart.left,
//               color: heart.color,
//               fontSize: `${heart.size}px`,
//               animation: "floatUp 7s linear infinite",
//               animationDelay: heart.delay,
//               opacity: 0,
//             }}
//           >
//             ❤
//           </span>
//         ))}
//       </div>

//       {/* 🌸 HAPPY TEXT (TOP) */}
//       {/* 🌸 HAPPY TEXT (TOP) */}
// <div className="relative z-10 pt-32 text-center">
//   <h1
//     className="
//       text-[28px] sm:text-[34px] md:text-[40px]
//       font-semibold
//       tracking-[0.4em]
//       uppercase
//       text-rose-600/70
//     "
//   >
//     Happy
//   </h1>
// </div>


//       {/* 🌹 ROSE → GIF → DAY */}
//       <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 px-6 mt-12 max-w-6xl mx-auto">

//         {/* ROSE TEXT */}
//         <div className="text-[72px] sm:text-[96px] md:text-[130px] font-extrabold tracking-[0.3em] text-rose-600/80">
//           ROSE
//         </div>

//         {/* ROSE GIF */}
//         <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56">
//           <DotLottieReact
//             src="https://lottie.host/79305d8f-0d07-4139-8790-01aeb0f29e53/QV06KTfmJk.lottie"
//             autoplay
//             loop
//           />
//         </div>

//         {/* DAY TEXT */}
//         <div className="text-[72px] sm:text-[96px] md:text-[130px] font-extrabold tracking-[0.3em] text-rose-600/80">
//           DAY
//         </div>
//       </div>

//       {/* 💌 MESSAGE */}
//       <div className="relative z-10 max-w-xl mx-auto mt-20 text-center px-6">
//         <p className="text-rose-700 text-base sm:text-lg leading-relaxed">
//           A rose may fade, but what I feel for you never will.
//         </p>

//         <p className="mt-6 text-rose-600 text-sm sm:text-base leading-relaxed">
//           This day isn’t about flowers —  
//           it’s about choosing you,  
//           again and again,  
//           in every season of life.
//         </p>

//         <p className="mt-10 italic text-rose-600 text-sm">
//           “Love planted a rose, and the world turned sweet.”
//         </p>
//       </div>

//       {/* 💖 ANIMATION */}
//       <style>{`
//         @keyframes floatUp {
//           0% { transform: translateY(20px); opacity: 0; }
//           30% { opacity: 0.6; }
//           70% { opacity: 0.6; }
//           100% { transform: translateY(-90px); opacity: 0; }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default RoseDayContent;


import React, { useMemo, useEffect, useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

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
    size: Math.random() * 14 + 16,
    color: heartColors[Math.floor(Math.random() * heartColors.length)],
  }));

const RoseDayContent = () => {
  const hearts = useMemo(() => generateHearts(36), []);
  const name = "my cute little baby elephant (BETU)";

  const lastDropTime = useRef(0);

  /* 🌸 PETALS — DROP ONLY WHEN CURSOR MOVES */
  useEffect(() => {
    const handleMouseMove = (e) => {
      const now = Date.now();

      // ⏱ Throttle: 1 petal every 200ms
      if (now - lastDropTime.current < 200) return;
      lastDropTime.current = now;

      const layer = document.getElementById("petal-layer");
      if (!layer) return;

      // Clamp X (no horizontal scroll)
      const safeX = Math.min(
        Math.max(e.clientX, 30),
        window.innerWidth - 30
      );

      const startY = e.clientY;

      const petal = document.createElement("span");
      petal.textContent = "🌸";
      petal.style.position = "absolute";
      petal.style.left = `${safeX}px`;
      petal.style.top = `${startY}px`;
      petal.style.pointerEvents = "none";
      petal.style.fontSize = "24px";
      petal.style.opacity = "0.9";
      petal.style.transform = "translateX(-50%)";
      petal.style.transition =
        "transform 3.2s ease-in, opacity 3.2s linear";

      layer.appendChild(petal);

      // Force layout
      petal.getBoundingClientRect();

      // Fall to bottom of viewport
      const fallDistance = window.innerHeight - startY;
      petal.style.transform =
        `translateX(-50%) translateY(${fallDistance}px)`;
      petal.style.opacity = "0";

      setTimeout(() => petal.remove(), 3400);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
useEffect(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, []);
  return (
    <div className="relative min-h-screen w-full bg-rose-50">

      {/* 🌸 PETAL LAYER */}
      <div
        id="petal-layer"
        className="fixed inset-0 pointer-events-none z-40"
      />

      {/* 🌹 BIG ROSE BACKGROUND */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.12] pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1526045478516-99145907023c"
          alt="Rose"
          className="w-[300px] sm:w-[420px] md:w-[520px] rotate-[-8deg]"
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

      {/* 🌸 HAPPY TEXT */}
      <div className="relative z-10 pt-32 text-center">
        <h1 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold tracking-[0.4em] uppercase text-rose-600/70">
          Happy
        </h1>
      </div>

      {/* 🌹 ROSE → GIF → DAY */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 px-6 mt-12 max-w-6xl mx-auto">
        <div className="text-[72px] sm:text-[96px] md:text-[130px] font-extrabold tracking-[0.3em] text-rose-600/80">
          ROSE
        </div>

        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56">
          <DotLottieReact
            src="https://lottie.host/79305d8f-0d07-4139-8790-01aeb0f29e53/QV06KTfmJk.lottie"
            autoplay
            loop
          />
        </div>

        <div className="text-[72px] sm:text-[96px] md:text-[130px] font-extrabold tracking-[0.3em] text-rose-600/80">
          DAY
        </div>
      </div>

      {/* 💌 MESSAGE */}
      <div className="relative z-10 max-w-2xl mx-auto mt-20 text-center px-6">
        <p className="text-rose-600 text-sm uppercase tracking-widest">
          This rose is for
        </p>

        <p className="mt-4 text-rose-700 text-[28px] sm:text-[36px] md:text-[44px] font-extrabold leading-tight">
          {name} 🌹
        </p>

        <p className="mt-8 text-rose-600 text-sm sm:text-base leading-relaxed">
          This day isn’t about flowers —  
          it’s about choosing you,  
          again and again,  
          in every season of life.
        </p>

        <p className="mt-10 italic text-rose-600 text-sm">
          “Love planted a rose, and the world turned sweet.”
        </p>

        {/* <button
          onClick={() => window.print()}
          className="mt-12 rounded-full bg-rose-600 text-white px-6 py-2 text-sm hover:bg-rose-700 transition"
        >
          Save This Moment 💖
        </button> */}
      </div>

      {/* 💖 HEART FLOAT */}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(20px); opacity: 0; }
          30% { opacity: 0.6; }
          70% { opacity: 0.6; }
          100% { transform: translateY(-90px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default RoseDayContent;
