import React, { useState, useEffect } from "react";

/* 💌 POLISHED MESSAGES */
const messages = {
  teddy: "I’m probably thinking of you right now 🧸🤍",
  read: "Even when everything feels quiet, my feelings for you never fade ✨",
  us: "Some moments pass… but what we feel always stays 💖",
};

const options = [
  { key: "teddy", icon: "🧸", label: "Hold the teddy" },
  { key: "read", icon: "🌙", label: "Read this again" },
  { key: "us", icon: "💭", label: "Think of us" },
];

const MissingMe = () => {
  const [active, setActive] = useState(null);
  const [typedText, setTypedText] = useState("");

  /* ⌨️ TYPEWRITER EFFECT */
  useEffect(() => {
    if (!active) return;

    const fullText = messages[active];
    setTypedText("");
    let i = 0;

    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullText[i]);
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 45);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <section
      className="relative w-full py-32 px-6 overflow-hidden
                 bg-gradient-to-br from-[#fff1e6] via-[#fde2cf] to-[#f7cbb0]"
    >

      {/* 💗 FLOATING HEARTS */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <span
            key={i}
            className="absolute text-pink-300/40 text-xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          >
            ❤
          </span>
        ))}
      </div>

      {/* 🌙 TITLE */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-[26px] sm:text-[32px] md:text-[38px]
                       font-semibold tracking-[0.4em]
                       uppercase text-[#8b5a35]">
          If You’re Ever Missing Me…
        </h2>

        <p className="mt-6 text-[#7a4a2a] text-sm sm:text-base leading-relaxed">
          No explaining. No typing.  
          Just follow what your heart feels 🤍
        </p>
      </div>

      {/* 🎴 INTERACTIVE CARDS */}
      <div className="relative z-10 max-w-5xl mx-auto
                      grid grid-cols-1 sm:grid-cols-3 gap-10">
        {options.map((opt) => (
          <div
            key={opt.key}
            onClick={() => setActive(opt.key)}
            className={`cursor-pointer group
                        relative rounded-[28px] p-8 text-center
                        backdrop-blur-xl border
                        transition-all duration-500
                        ${
                          active === opt.key
                            ? "bg-white/80 border-[#e8bfa6] scale-105 shadow-2xl"
                            : "bg-white/50 border-white/40 hover:scale-105"
                        }`}
          >
            <div className="text-[42px] mb-4 group-hover:scale-110 transition">
              {opt.icon}
            </div>
            <p className="text-[#7a4a2a] font-semibold">
              {opt.label}
            </p>

            {active === opt.key && (
              <span className="absolute inset-0 rounded-[28px]
                               ring-2 ring-[#e8bfa6]/60 animate-pulse" />
            )}
          </div>
        ))}
      </div>

      {/* 💌 MESSAGE DISPLAY */}
      {active && (
        <div className="relative z-10 mt-20 max-w-xl mx-auto
                        text-center bg-white/70 backdrop-blur-xl
                        border border-white/40
                        rounded-[32px] px-8 sm:px-10 py-10
                        shadow-2xl animate-fadeIn">
          <p className="text-[#8b5a35] text-base sm:text-lg
                        leading-relaxed min-h-[60px]">
            {typedText}
          </p>

          <p className="mt-6 text-xs text-[#a46a3d] italic">
            This appears only when you truly feel it 🤍
          </p>
        </div>
      )}

      {/* 🤍 FINAL CLOSING LINES */}
      <div className="relative z-10 mt-28 max-w-2xl mx-auto text-center">
        <p className="text-[#7a4a2a] text-sm sm:text-base leading-relaxed">
          Even if you don’t click anything,  
          even if you don’t read a word…
        </p>

        <p className="mt-4 text-[#8b5a35] text-sm sm:text-base leading-relaxed">
          Just know this —  
          you are always on my mind,  
          in the quiet moments and the happy ones 🤍
        </p>

        <p className="mt-6 italic text-[#a46a3d] text-sm">
          No distance. No silence. Just us.
        </p>
      </div>

      {/* 🎞️ ANIMATIONS */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); opacity: 0; }
          25% { opacity: 0.6; }
          100% { transform: translateY(-140px); opacity: 0; }
        }
        .animate-float {
          animation: float 12s linear infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>

    </section>
  );
};

export default MissingMe;
