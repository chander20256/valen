import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";

/* ================= DAYS ================= */
const days = [
  {
    id: 1,
    name: "Rose Day",
    emoji: "🌹",
    path: "/rose-day",
    line: "A Bloom of Love for You 🌹",
  },
  {
    id: 2,
    name: "Propose Day",
    emoji: "💍",
    path: "/propose-day", // ✅ ONLY ADDITION
    line: "Will You Hold My Heart? 💍",
  },
  {
    id: 3,
    name: "Chocolate Day",
    emoji: "🍫",
    line: "Sweet Moments, Just Us 🍫",
  },
  {
    id: 4,
    name: "Teddy Day",
    emoji: "🧸",
    line: "Wrapped in My Warmth 🧸",
  },
  {
    id: 5,
    name: "Promise Day",
    emoji: "🤞",
    line: "My Forever Starts Here 🤞",
  },
  {
    id: 6,
    name: "Hug Day",
    emoji: "🤗",
    line: "Right Here, In My Arms 🤗",
  },
  {
    id: 7,
    name: "Kiss Day",
    emoji: "💋",
    line: "A Soft Kiss, Waiting 💋",
  },
  {
    id: 8,
    name: "Valentine’s Day",
    emoji: "❤️",
    line: "All My Love, Always ❤️",
  },
];

/* 🌹 Valentine Week Start */
const VALENTINE_START = new Date("2026-02-07");

/* ================= HEART BACKGROUND ================= */
const heartColors = [
  "rgba(255,105,135,0.4)",
  "rgba(255,182,193,0.4)",
  "rgba(220,20,60,0.35)",
];

const generateHearts = (count) =>
  Array.from({ length: count }).map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 2}s`,
    size: Math.random() * 12 + 16,
    color: heartColors[Math.floor(Math.random() * heartColors.length)],
  }));

/* ⏳ TIME FORMAT */
const formatTime = (ms) => {
  if (ms <= 0) return "Unlocked";

  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);

  return `${days}d ${hours}h ${minutes}m`;
};

const WeekDays = () => {
  const hearts = useMemo(() => generateHearts(30), []);
  const navigate = useNavigate();
  const [now, setNow] = useState(new Date());

  /* ⏱ LIVE TIMER */
  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = (isUnlocked, path) => {
    if (!isUnlocked || !path) return;
    setTimeout(() => navigate(path), 160);
  };

  return (
    <div className="relative max-w-5xl mx-auto">

      {/* 💕 FLOATING HEARTS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
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

      {/* 🌸 DAYS GRID */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {days.map((day) => {
          const unlockDate = new Date(VALENTINE_START);
          unlockDate.setDate(VALENTINE_START.getDate() + (day.id - 1));
          unlockDate.setHours(0, 0, 0, 0);

          const timeLeft = unlockDate - now;
          const isUnlocked = timeLeft <= 0;

          return (
            <div
              key={day.id}
              onClick={() => handleClick(isUnlocked, day.path)}
              className={`
                group day-card relative aspect-square rounded-full
                flex items-center justify-center
                backdrop-blur-xl shadow-xl border
                transition-all duration-300 ease-out
                ${
                  isUnlocked
                    ? "bg-white/80 border-rose-200 cursor-pointer hover:-translate-y-2 hover:scale-[1.08]"
                    : "bg-white/50 border-white/70 cursor-not-allowed"
                }
                active:scale-[0.95]
              `}
            >
              {isUnlocked && (
                <div className="absolute inset-0 rounded-full glow opacity-0 group-hover:opacity-100 transition duration-300" />
              )}

              <div
                className={`relative flex flex-col items-center text-center px-3 ${
                  isUnlocked ? "" : "opacity-40"
                }`}
              >
                <div
                  className={`text-4xl sm:text-5xl mb-2 ${
                    isUnlocked ? "group-hover:animate-bounce-soft" : ""
                  }`}
                >
                  {day.emoji}
                </div>

                <p className="text-xs sm:text-sm font-medium text-rose-600">
                  {day.name}
                </p>

                <p className="mt-2 text-[11px] sm:text-[12px] text-rose-500 italic">
                  {day.line}
                </p>
              </div>

              {!isUnlocked && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/60 backdrop-blur-md rounded-full text-rose-600">
                  <Lock size={22} />
                  <span className="text-[10px] uppercase tracking-widest mt-1">
                    Unlocks in
                  </span>
                  <span className="text-[11px] font-medium mt-1">
                    {formatTime(timeLeft)}
                  </span>
                </div>
              )}

              {isUnlocked && (
                <span className="ripple absolute inset-0 rounded-full pointer-events-none" />
              )}
            </div>
          );
        })}
      </div>

      {/* 💓 ANIMATIONS */}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(20px); opacity: 0; }
          30% { opacity: 0.6; }
          70% { opacity: 0.6; }
          100% { transform: translateY(-90px); opacity: 0; }
        }

        .glow {
          box-shadow:
            0 0 25px rgba(244,63,94,0.35),
            inset 0 0 18px rgba(244,63,94,0.25);
        }

        @keyframes bounceSoft {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .animate-bounce-soft {
          animation: bounceSoft 0.6s ease;
        }

        .day-card:active .ripple {
          animation: ripple 0.45s ease-out;
        }

        @keyframes ripple {
          0% { box-shadow: 0 0 0 0 rgba(244,63,94,0.4); }
          100% { box-shadow: 0 0 0 45px rgba(244,63,94,0); }
        }
      `}</style>
    </div>
  );
};

export default WeekDays;
