import React, { useState } from "react";

const reasons = [
  {
    emoji: "🌸",
    text: "You make my bad days softer",
  },
  {
    emoji: "🏡",
    text: "You feel like home to me",
  },
  {
    emoji: "🤍",
    text: "You make silence beautiful",
  },
];

const WhyYouAreSpecial = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="relative z-10 max-w-5xl mx-auto mt-32 mb-32 px-6 text-center">

      {/* 🌸 TITLE */}
      <h2 className="text-rose-700 text-xl sm:text-2xl font-semibold">
        Why You’re Special 💖
      </h2>

      {/* 🌷 SUBTITLE */}
      <p className="mt-4 text-rose-500 text-sm sm:text-base max-w-xl mx-auto">
        Some feelings don’t need big words —  
        they just need honesty.
      </p>

      {/* 💗 CARDS */}
      <div className="grid gap-6 sm:grid-cols-3 mt-16">
        {reasons.map((item, index) => {
          const isActive = active === index;

          return (
            <div
              key={index}
              onClick={() => setActive(isActive ? null : index)}
              className={`
                cursor-pointer
                rounded-2xl
                border border-rose-200
                p-6
                min-h-[170px]
                flex flex-col items-center justify-center
                transition-all
                duration-500
                ${
                  isActive
                    ? "bg-rose-100/70 scale-[1.03] shadow-lg"
                    : "bg-white/70 hover:shadow-md"
                }
              `}
            >
              {/* EMOJI */}
              <div className="text-3xl mb-4">
                {item.emoji}
              </div>

              {/* DIVIDER */}
              <div className="w-10 h-[1px] bg-rose-300 mb-4" />

              {/* TEXT */}
              {isActive ? (
                <p className="text-rose-700 text-sm sm:text-base leading-relaxed">
                  {item.text}
                </p>
              ) : (
                <p className="text-rose-400 text-xs uppercase tracking-widest">
                  Tap to reveal
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* 🌹 CLOSING LINE */}
      <p className="mt-20 text-rose-600 text-sm italic">
        And there are a thousand more reasons —  
        these are just the quiet ones.
      </p>
    </div>
  );
};

export default WhyYouAreSpecial;
