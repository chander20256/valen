

import React, { useState, useRef, useEffect } from "react";

const ProposeVideoMoment = () => {
  const videoRef = useRef(null);
  const actionRef = useRef(null); // for "Do you want this video?"
  const teaseRef = useRef(null);  // ✅ NEW: for "Oh… really?"

  const [stage, setStage] = useState("ask");
  const [softMessage, setSoftMessage] = useState("");
  const [videoEnded, setVideoEnded] = useState(false);

  /* ✅ Auto-scroll when "Do you want this video?" appears */
  useEffect(() => {
    if (videoEnded && actionRef.current) {
      actionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [videoEnded]);

  /* ✅ Auto-scroll when "Oh… really?" appears */
  useEffect(() => {
    if (stage === "tease" && teaseRef.current) {
      teaseRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [stage]);

  return (
    <section className="relative py-28 px-6 bg-gradient-to-br from-pink-100 via-rose-100 to-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">

        {/* 🌸 STAGE 1 — ASK */}
        {stage === "ask" && (
          <>
            <p className="text-rose-500 text-sm uppercase tracking-widest">
              Before we go further
            </p>

            <h2 className="mt-6 text-rose-700 text-[28px] sm:text-[36px] font-extrabold">
              I made something for you…
            </h2>

            <p className="mt-6 text-rose-600 text-sm sm:text-base">
              It’s small, but it holds a lot of my heart.  
              Do you want to see it?
            </p>

            <div className="mt-14 flex justify-center gap-10">
              <button
                onClick={() => {
                  setStage("showVideo");
                  setSoftMessage("");
                }}
                className="px-14 py-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg hover:scale-105 transition"
              >
                Yes 💖
              </button>

              <button
                onClick={() =>
                  setSoftMessage(
                    "That’s okay. Some things feel better when you’re ready 🤍"
                  )
                }
                className="px-14 py-4 rounded-full border border-rose-300 text-rose-600"
              >
                Maybe 🌸
              </button>
            </div>

            {softMessage && (
              <p className="mt-8 text-rose-500 italic text-sm">
                {softMessage}
              </p>
            )}
          </>
        )}

        {/* 🎬 STAGE 2 — VIDEO */}
        {stage === "showVideo" && (
          <>
            <h2 className="text-rose-700 text-[26px] sm:text-[34px] font-semibold mb-10">
              This is just for you 🤍
            </h2>

            <div className="mx-auto max-w-3xl">
              <div className="relative aspect-video max-h-[70vh] rounded-[28px] overflow-hidden shadow-2xl bg-white/70 backdrop-blur-xl">
                <video
                  ref={videoRef}
                  src="/New folder/WhatsApp Video 2026-02-06 at 10.33.08 PM.mp4"
                  autoPlay
                  muted
                  controls
                  playsInline
                  onEnded={() => setVideoEnded(true)}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <p className="mt-4 text-rose-500 text-sm italic">
              Tap the sound when you’re ready 🤍
            </p>

            {/* 💭 AFTER VIDEO */}
            {videoEnded && (
              <div ref={actionRef} className="mt-16 animate-fadeIn">
                <h3 className="text-rose-700 text-[24px] sm:text-[30px] font-extrabold">
                  Do you want this video? 💞
                </h3>

                <p className="mt-4 text-rose-600 text-sm sm:text-base">
                  I kept it safe… just like the feelings inside it.
                </p>

                <div className="mt-10 flex justify-center gap-10">
                  <button
                    onClick={() => {
                      setStage("tease");
                      setSoftMessage("");
                    }}
                    className="px-14 py-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white"
                  >
                    Yes 🥺
                  </button>

                  <button
                    onClick={() =>
                      setSoftMessage(
                        "That’s okay… some memories are meant to stay softly in the heart 🤍"
                      )
                    }
                    className="px-14 py-4 rounded-full border border-rose-300 text-rose-600"
                  >
                    I’ll remember it 🤍
                  </button>
                </div>

                {softMessage && (
                  <p className="mt-6 italic text-rose-500 text-sm">
                    {softMessage}
                  </p>
                )}
              </div>
            )}
          </>
        )}

        {/* 😌 STAGE 3 — TEASE */}
        {stage === "tease" && (
          <div ref={teaseRef} className="animate-fadeIn">
            <h2 className="text-rose-700 text-[26px] sm:text-[34px] font-semibold">
              Oh… really? 🌸
            </h2>

            <p className="mt-6 text-rose-600 text-sm sm:text-base italic">
              You want <em>this</em> video?  
              The one that carries my feelings for you?
            </p>

            <p className="mt-8 text-rose-500 text-sm">
              Then I think you should keep it 🤍
            </p>

            <button
              onClick={() => setStage("download")}
              className="mt-12 px-16 py-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-xl hover:scale-105 transition"
            >
              Give it to me 💖
            </button>
          </div>
        )}

        {/* 💝 STAGE 4 — DOWNLOAD */}
        {stage === "download" && (
          <>
            <h2 className="text-rose-700 text-[30px] sm:text-[38px] font-extrabold">
              It’s yours now 💍
            </h2>

            <p className="mt-6 text-rose-600 text-sm sm:text-base leading-relaxed">
              Keep it.  
              Watch it whenever you miss me.  
              Let it remind you that someone chose you — gently, completely.
            </p>

            <a
              href="/New folder/WhatsApp Video 2026-02-06 at 10.33.08 PM.mp4"
              download
              className="inline-block mt-14 px-16 py-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-2xl hover:scale-105 transition"
            >
              Download This Moment 💖
            </a>

            <p className="mt-10 italic text-rose-500 text-sm">
              “Some gifts aren’t meant to be explained.”
            </p>
          </>
        )}

      </div>

      {/* ✨ FADE IN ANIMATION */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default ProposeVideoMoment;
