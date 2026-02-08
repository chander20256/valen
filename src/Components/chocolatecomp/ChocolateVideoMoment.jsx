

import React, { useEffect, useRef, useState } from "react";

/* 🍫 VIDEO DATA — ADD YOUR OWN LINKS */
const videos = [
  {
    id: "sweet",
    label: "Sweet 🤎",
    title: "The First Time",
    desc: "When everything felt new, shy smiles, nervous hearts, and the sweetness of a first meeting.",
    src: "/video/FirstLovevideo.mp4",
  },
  {
    id: "warm",
    label: "Warm ☕",
    title: "The Second Time",
    desc: "When comfort replaced hesitation, laughter flowed easier, and warmth began to grow.",
    src: "/video/Secondlovevideo.mp4",
  },
  {
    id: "special",
    label: "Special 🍬",
    title: "The Third Time",
    desc: "When feelings felt deeper, moments felt longer, and something special quietly settled in.",
    src: "/video/Thirdlovevideo.mp4",
  },
];

const ChocolateVideoMoment = () => {
  const videoRefs = useRef([]);
  const questionRef = useRef(null);

  const savedVideoId = localStorage.getItem("chocolate_selected_video");

  const [currentPlaying, setCurrentPlaying] = useState(0);
  const [allFinished, setAllFinished] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(savedVideoId);

  /* ▶️ PLAY SEQUENTIALLY (ONLY BEFORE SELECTION) */
  useEffect(() => {
    if (selectedVideo) return;

    const video = videoRefs.current[currentPlaying];
    if (video) video.play().catch(() => {});
  }, [currentPlaying, selectedVideo]);

  /* ⏭️ HANDLE VIDEO END */
  const handleEnded = () => {
    if (currentPlaying < videos.length - 1) {
      setCurrentPlaying((p) => p + 1);
    } else {
      setAllFinished(true);
      setTimeout(() => {
        questionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 300);
    }
  };

  /* ❤️ HANDLE CHOICE */
  const handleChoice = (id) => {
    setSelectedVideo(id);
    localStorage.setItem("chocolate_selected_video", id);
  };

  return (
    <section className="relative py-28 px-6 bg-gradient-to-br from-[#2a160d] via-[#3b2418] to-[#1a0e09] overflow-hidden">
      <div className="max-w-6xl mx-auto text-center text-[#f3e5d8]">

        {/* HEADER */}
        <p className="uppercase tracking-widest text-sm text-[#d4a373]">
          Chocolate Day
        </p>

        <h2 className="mt-6 text-[30px] sm:text-[38px] font-extrabold">
          Three moments, three kinds of sweetness 🍫
        </h2>

        <p className="mt-4 text-sm text-[#e6ccb2]">
          Each time felt different. One stayed with you.
        </p>

        {/* 🍫 PYRAMID LAYOUT */}
        <div className="mt-16 space-y-12">

          {/* 🔺 TOP ROW */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[videos[0], videos[1]].map((vid, i) => {
              const isSelected = selectedVideo === vid.id;
              const isInactive = selectedVideo && !isSelected;

              return (
                <div key={vid.id} className="space-y-4">
                  <div
                    className={`relative rounded-2xl overflow-hidden shadow-xl bg-black transition ${
                      isInactive
                        ? "opacity-70 blur-[1px] pointer-events-none"
                        : ""
                    }`}
                  >
                    <video
                      ref={(el) => (videoRefs.current[i] = el)}
                      src={vid.src}
                      unmuted={!isSelected}
                      playsInline
                      controls={isSelected}
                      onEnded={handleEnded}
                      className="w-full aspect-video object-contain"
                    />

                    {/* 🕊️ SOFT MESSAGE */}
                    {isInactive && (
                      <div className="absolute inset-0 flex items-center justify-center text-xs text-white/70">
                        This moment has passed 🤍
                      </div>
                    )}
                  </div>

                  <div className="px-4">
                    <h4 className="text-lg font-semibold">{vid.title}</h4>
                    <p className="mt-2 text-sm text-[#e6ccb2]">{vid.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 🔻 BOTTOM ROW */}
          <div className="flex justify-center">
            <div className="w-full md:w-2/3 space-y-4">
              {(() => {
                const vid = videos[2];
                const isSelected = selectedVideo === vid.id;
                const isInactive = selectedVideo && !isSelected;

                return (
                  <>
                    <div
                      className={`relative rounded-2xl overflow-hidden shadow-xl bg-black transition ${
                        isInactive
                          ? "opacity-70 blur-[1px] pointer-events-none"
                          : ""
                      }`}
                    >
                      <video
                        ref={(el) => (videoRefs.current[2] = el)}
                        src={vid.src}
                        muted={!isSelected}
                        playsInline
                        controls={isSelected}
                        onEnded={handleEnded}
                        className="w-full aspect-video object-contain"
                      />

                      {isInactive && (
                        <div className="absolute inset-0 flex items-center justify-center text-xs text-white/70">
                          This moment has passed 🤍
                        </div>
                      )}
                    </div>

                    <div className="px-6 text-center">
                      <h4 className="text-xl font-semibold">{vid.title}</h4>
                      <p className="mt-3 text-sm text-[#e6ccb2]">{vid.desc}</p>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>

        {/* ❓ QUESTION */}
        {allFinished && !selectedVideo && (
          <div ref={questionRef} className="mt-28 animate-fadeIn">
            <h3 className="text-[26px] sm:text-[34px] font-extrabold">
              How did this make you feel?
            </h3>

            <div className="mt-12 flex flex-wrap justify-center gap-10">
              {videos.map((v) => (
                <button
                  key={v.id}
                  onClick={() => handleChoice(v.id)}
                  className="px-14 py-4 rounded-full bg-gradient-to-r from-[#d4a373] to-[#b08968] text-[#2a160d] shadow-lg hover:scale-105 transition"
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 🎁 DOWNLOAD (ONLY SELECTED) */}
        {selectedVideo && (
          <div className="mt-28 animate-fadeIn">
            <a
              href={videos.find(v => v.id === selectedVideo)?.src}
              download
              className="inline-block px-16 py-4 rounded-full bg-gradient-to-r from-[#d4a373] to-[#b08968] text-[#2a160d] shadow-2xl hover:scale-105 transition"
            >
              Download Your Chocolate Moment 🍫
            </a>

            <p className="mt-8 italic text-[#e6ccb2] text-sm">
              “Some chances come only once — and that’s what makes them special.”
            </p>
          </div>
        )}
      </div>

      {/* ✨ FADE IN */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default ChocolateVideoMoment;
