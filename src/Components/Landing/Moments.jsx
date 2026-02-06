import React, { useState, useEffect } from "react";

/* Images */
const moments = [
  "New folder/WhatsApp Image 2026-02-06 at 10.33.08 PM (3).jpeg",
  "New folder/WhatsApp Image 2026-02-06 at 10.33.08 PM (1).jpeg",
  "New folder/WhatsApp Image 2026-02-06 at 10.33.08 PM (2).jpeg",
  "New folder/WhatsApp Image 2026-02-06 at 10.33.08 PM (12).jpeg",
  "New folder/WhatsApp Image 2026-02-06 at 10.33.08 PM (13).jpeg",
  "New folder/WhatsApp Image 2026-02-06 at 10.33.08 PM.jpeg",
  "New folder/WhatsApp Image 2026-02-06 at 10.33.08 PM (5).jpeg",
  "New folder/WhatsApp Image 2026-02-06 at 10.33.08 PM (7).jpeg",
  "New folder/WhatsApp Image 2026-02-06 at 10.33.08 PM (9).jpeg",
  "New folder/WhatsApp Image 2026-02-06 at 10.33.08 PM (6).jpeg",
  "New folder/WhatsApp Image 2026-02-06 at 10.33.08 PM (8).jpeg",
  "New folder/WhatsApp Image 2026-02-06 at 10.33.08 PM (10).jpeg",
  "",
  "",
];

/* Split images into columns */
const getColumns = (items, count) => {
  const cols = Array.from({ length: count }, () => []);
  items.forEach((item, i) => cols[i % count].push(item));
  return cols;
};

const Moments = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const columns = getColumns(moments, 4);

  /* Keyboard controls */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    if (activeIndex !== null) {
      window.addEventListener("keydown", handleKey);
    }

    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  const nextImage = () =>
    setActiveIndex((prev) => (prev + 1) % moments.length);

  const prevImage = () =>
    setActiveIndex((prev) =>
      prev === 0 ? moments.length - 1 : prev - 1
    );

  return (
    <section
      id="moments"
      className="w-full px-6 py-24 md:py-32 bg-gradient-to-br from-pink-100 to-rose-200"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-[11px] tracking-[0.35em] uppercase text-rose-400 mb-3">
          Moments
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-rose-700">
          Little pieces of us
        </h2>
        <p className="mt-4 text-sm sm:text-base text-rose-500 max-w-xl mx-auto">
          Small moments, simple memories, quietly staying with us.
        </p>
      </div>

      {/* Masonry */}
      <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-4">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="grid gap-4">
            {column.map((src, index) => {
              const globalIndex = colIndex + index * columns.length;

              return (
                <div
                  key={globalIndex}
                  onClick={() => setActiveIndex(globalIndex)}
                  className="cursor-pointer overflow-hidden rounded-2xl shadow-lg bg-white transition-transform duration-300 hover:scale-[1.02]"
                >
                  {src && (
                    <img
                      src={src}
                      alt="Moment"
                      className="h-auto max-w-full object-cover"
                      loading="lazy"
                    />
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* 🔍 LIGHTBOX */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-white/70 backdrop-blur-md flex items-center justify-center px-4"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* LEFT – TEXT + LOTTIE */}

{/* LEFT – TEXT (TOP) + LOTTIE + TEXT (BOTTOM) */}
<div className="md:w-1/2 w-full flex flex-col items-center justify-center p-6 bg-rose-50">

  {/* TOP TEXT */}
  <p className="
    mb-3
    text-center
    text-rose-600
    font-semibold
    text-lg
    sm:text-xl
    tracking-wide
    uppercase
  ">
    After watching these memories
  </p>

  {/* LOTTIE */}
  <iframe
    src="https://lottie.host/embed/88ec4c5e-ce8c-4b72-b3c6-5cd609daba22/exmFyJDk6F.lottie"
    className="w-full h-[240px] md:h-[60vh]"
    frameBorder="0"
    title="Lottie Animation"
  />

  {/* BOTTOM TEXT */}
  <p className="
    mt-3
    text-center
    text-rose-800
    font-bold
    text-xl
    sm:text-2xl
    leading-tight
    uppercase
  ">
    my heart be like…
  </p>
</div>



            {/* RIGHT – IMAGE */}
            <div className="md:w-1/2 w-full flex items-center justify-center p-6 bg-white">
              <img
                src={moments[activeIndex]}
                alt="Preview"
                className="max-h-[75vh] w-full object-contain rounded-2xl"
              />
            </div>

            {/* CLOSE */}
            <button
              onClick={() => setActiveIndex(null)}
              className="absolute top-4 right-4 text-rose-600 text-2xl font-semibold"
            >
              ✕
            </button>

            {/* PREV */}
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-rose-600 text-3xl px-3"
            >
              ❮
            </button>

            {/* NEXT */}
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-rose-600 text-3xl px-3"
            >
              ❯
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Moments;
