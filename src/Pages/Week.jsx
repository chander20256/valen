import React, { useMemo,  useEffect} from "react";
import Navbar from "../Components/Globalcomp/Navbar";
import WeekDays from "../Components/WeekComp/WeekDays";

/* 💕 HEART CONFIG */
const heartColors = [
  "rgba(255,105,135,0.35)",
  "rgba(255,182,193,0.35)",
  "rgba(220,20,60,0.3)",
];

const generateHearts = (count) =>
  Array.from({ length: count }).map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 3}s`,
    size: Math.random() * 14 + 14,
    color: heartColors[Math.floor(Math.random() * heartColors.length)],
  }));

const Week = () => {
  const hearts = useMemo(() => generateHearts(30), []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <section
      className="
        relative
        min-h-screen
        w-full
        px-6
        pt-32
        pb-28
        bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200
        overflow-hidden
      "
    >
      {/* NAVBAR */}
      <Navbar />

      {/* ❤️ FLOATING HEARTS BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {hearts.map((heart, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              top: heart.top,
              left: heart.left,
              color: heart.color,
              fontSize: `${heart.size}px`,
             animation: "floatUp 10s linear infinite",
              animationDelay: heart.delay,
              opacity: 0,
            }}
          >
            ❤
          </span>
        ))}
      </div>

      {/* 💕 HUGE LOVE TEXT */}
      <div
  className="
    absolute inset-0
    pointer-events-none
    flex items-center justify-center
    text-[240px] sm:text-[280px] md:text-[250px]
    font-extrabold
    tracking-[0.35em]
    text-rose-500/20
    select-none
    uppercase
    drop-shadow-[0_0_40px_rgba(244,63,94,0.15)]
    mt-25
  "
>
  LOVE
</div>


      {/* HEADER */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-20">
        <p className="text-[11px] tracking-[0.4em] uppercase text-rose-400 mb-4">
          Valentine Week
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-rose-700 leading-snug">
          A week written just for us
        </h1>

        <p className="mt-6 text-sm sm:text-base text-rose-500 leading-relaxed">
          Not a countdown of days,
          <br className="hidden sm:block" />
          but a collection of feelings — unfolding slowly,
          gently, the way love always does.
        </p>
      </div>

      {/* 🌹 ROMANTIC QUOTE */}
      <div className="relative z-10 max-w-xl mx-auto text-center mb-16">
        <p className="italic text-rose-600 text-sm sm:text-base leading-relaxed">
          “Some love stories are written in letters,  
          some in moments —  
          ours is written in the quiet space  
          between a heartbeat and a smile.”
        </p>
      </div>

      {/* DAYS */}
      <WeekDays />

      {/* 💌 FOOTNOTE */}
      <div className="relative z-10 mt-20 text-center max-w-xl mx-auto space-y-4">
        <p className="text-sm text-rose-500 leading-relaxed">
          Each day is locked for now —  
          not to keep you away,  
          but to remind us that the best things  
          are worth waiting for.
        </p>

        <p className="text-xs uppercase tracking-[0.3em] text-rose-400">
          One day at a time
        </p>
      </div>

      {/* 💖 HEART ANIMATION */}
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          25% {
            opacity: 0.5;
          }
          75% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-80px);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Week;
