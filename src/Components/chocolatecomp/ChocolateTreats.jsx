import React from "react";

const treats = [
  {
    title: "Dark Chocolate",
    text: "For the depth of love that grows stronger every day.",
  },
  {
    title: "Milk Chocolate",
    text: "For the warmth that makes everything feel safe.",
  },
  {
    title: "White Chocolate",
    text: "For the sweetness that brightens my world.",
  },
];

const ChocolateTreats = () => {
  return (
    <section className="relative py-28 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-[#d4a373] text-sm uppercase tracking-widest">
        A little sweetness
      </h2>

      <p className="mt-4 text-[#f3d5b5] text-[26px] sm:text-[34px] font-extrabold">
        Made just for you 🍫
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {treats.map((item, i) => (
          <div
            key={i}
            className="
              rounded-2xl p-8
              bg-white/5 backdrop-blur-md
              border border-white/10
              hover:-translate-y-2
              transition-transform duration-500
            "
          >
            <h3 className="text-[#e6ccb2] text-xl font-semibold">
              {item.title}
            </h3>
            <p className="mt-4 text-[#d4a373] text-sm leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-20 italic text-[#c7a17a] text-sm">
        “Life is sweeter when shared with you.”
      </p>
    </section>
  );
};

export default ChocolateTreats;
