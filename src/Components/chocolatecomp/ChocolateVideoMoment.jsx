// import React, { useState, useRef, useEffect } from "react";

// const ChocolateVideoMoment = () => {
//   const videoRef = useRef(null);
//   const reactionRef = useRef(null);

//   const [videoEnded, setVideoEnded] = useState(false);
//   const [reaction, setReaction] = useState("");
//   const [showGift, setShowGift] = useState(false);

//   const videoSrc = "/New folder/WhatsApp Video 2026-02-06 at 10.33.08 PM.mp4";

//   /* 🍫 Auto-scroll to reactions */
//   useEffect(() => {
//     if (videoEnded && reactionRef.current) {
//       reactionRef.current.scrollIntoView({
//         behavior: "smooth",
//         block: "center",
//       });
//     }
//   }, [videoEnded]);

//   /* 🍫 Auto-scroll to gift */
//   useEffect(() => {
//     if (showGift && reactionRef.current) {
//       reactionRef.current.scrollIntoView({
//         behavior: "smooth",
//         block: "center",
//       });
//     }
//   }, [showGift]);

//   return (
//     <section className="relative py-28 px-6 bg-gradient-to-br from-[#3b2418] via-[#4a2d1f] to-[#2a160d] overflow-hidden">
//       <div className="max-w-4xl mx-auto text-center text-[#f3e5d8]">

//         {/* 🍫 TITLE */}
//         <p className="text-[#d4a373] text-sm uppercase tracking-widest">
//           Chocolate Day Special
//         </p>

//         <h2 className="mt-6 text-[28px] sm:text-[36px] font-extrabold">
//           A little sweetness for you 🍫
//         </h2>

//         <p className="mt-6 text-sm sm:text-base text-[#e6ccb2]">
//           I saved this moment because some sweetness  
//           is better when shared slowly.
//         </p>

//         {/* 🍫 FIXED VIDEO FRAME */}
//         <div className="mt-16 mx-auto max-w-3xl">
//           <div className="relative aspect-video max-h-[70vh] rounded-[28px] overflow-hidden shadow-2xl bg-black/40 backdrop-blur-xl">
//             <video
//               ref={videoRef}
//               src={videoSrc}
//               autoPlay
//               muted
//               controls
//               playsInline
//               onEnded={() => setVideoEnded(true)}
//               className="w-full h-full object-contain"
//             />
//           </div>
//         </div>

//         <p className="mt-4 text-[#e6ccb2] text-sm italic">
//           Turn on sound when you’re ready 🍫
//         </p>

//         {/* 🍬 REACTION OPTIONS */}
//         {videoEnded && (
//           <div
//             ref={reactionRef}
//             className="mt-20 animate-fadeIn"
//           >
//             <h3 className="text-[24px] sm:text-[30px] font-extrabold">
//               How did this make you feel?
//             </h3>

//             <div className="mt-12 flex flex-wrap justify-center gap-8">
//               <button
//                 onClick={() => {
//                   setReaction("sweet");
//                   setShowGift(true);
//                 }}
//                 className="px-12 py-4 rounded-full bg-gradient-to-r from-[#d4a373] to-[#b08968] text-[#3b2418]"
//               >
//                 Sweet 🤎
//               </button>

//               <button
//                 onClick={() => {
//                   setReaction("warm");
//                   setShowGift(true);
//                 }}
//                 className="px-12 py-4 rounded-full bg-gradient-to-r from-[#e6ccb2] to-[#d4a373] text-[#3b2418]"
//               >
//                 Warm ☕
//               </button>

//               <button
//                 onClick={() => {
//                   setReaction("special");
//                   setShowGift(true);
//                 }}
//                 className="px-12 py-4 rounded-full bg-gradient-to-r from-[#f3e5d8] to-[#e6ccb2] text-[#3b2418]"
//               >
//                 Special 🍬
//               </button>
//             </div>
//           </div>
//         )}

//         {/* 🍫 GIFT REVEAL */}
//         {showGift && (
//           <div className="mt-24 animate-fadeIn">
//             <h3 className="text-[26px] sm:text-[34px] font-extrabold">
//               Then this is for you 🍫
//             </h3>

//             <p className="mt-6 text-sm sm:text-base text-[#e6ccb2]">
//               Some chocolates are meant to be shared,  
//               some moments are meant to be kept.
//             </p>

//             <a
//               href={videoSrc}
//               download
//               className="inline-block mt-14 px-16 py-4 rounded-full bg-gradient-to-r from-[#d4a373] to-[#b08968] text-[#3b2418] shadow-2xl hover:scale-105 transition"
//             >
//               Keep This Sweet Moment 🍬
//             </a>

//             <p className="mt-10 italic text-[#e6ccb2] text-sm">
//               “Sweet things last longer when shared with love.”
//             </p>
//           </div>
//         )}
//       </div>

//       {/* ✨ FADE IN */}
//       <style>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.8s ease forwards;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ChocolateVideoMoment;
 
import React, { useEffect, useRef, useState } from "react";

/* 🍫 TEST VIDEO */
const TEST_VIDEO =
  "/New folder/WhatsApp Video 2026-02-06 at 10.33.08 PM.mp4";

/* 🍫 VIDEO DATA */
const videos = [
  {
    id: "sweet",
    label: "Sweet 🤎",
    title: "The First Time",
    desc: "When everything felt new, shy smiles, nervous hearts, and the sweetness of a first meeting.",
    src: TEST_VIDEO,
  },
  {
    id: "warm",
    label: "Warm ☕",
    title: "The Second Time",
    desc: "When comfort replaced hesitation, laughter flowed easier, and warmth began to grow.",
    src: TEST_VIDEO,
  },
  {
    id: "special",
    label: "Special 🍬",
    title: "The Third Time",
    desc: "When feelings felt deeper, moments felt longer, and something special quietly settled in.",
    src: TEST_VIDEO,
  },
];

const ChocolateVideoMoment = () => {
  const videoRefs = useRef([]);
  const questionRef = useRef(null);

  /* 🔐 LOAD SAVED VIDEO (IF ANY) */
  const savedVideoId = localStorage.getItem("chocolate_selected_video");

  const [currentPlaying, setCurrentPlaying] = useState(0);
  const [allFinished, setAllFinished] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(savedVideoId);
  const [showFinal, setShowFinal] = useState(!!savedVideoId);

  /* ▶️ PLAY SEQUENTIALLY (ONLY IF NO SAVED VIDEO) */
  useEffect(() => {
    if (selectedVideo) return;

    const video = videoRefs.current[currentPlaying];
    if (video) video.play().catch(() => {});
  }, [currentPlaying, selectedVideo]);

  /* ⏭️ VIDEO END HANDLER */
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

  /* ❤️ USER SELECTS FEELING */
  const handleChoice = (id) => {
    setSelectedVideo(id);
    localStorage.setItem("chocolate_selected_video", id);

    setTimeout(() => {
      setShowFinal(true);
    }, 600);
  };

  /* 🍬 FIND SELECTED VIDEO */
  const finalVideo = videos.find((v) => v.id === selectedVideo);

  return (
    <section className="relative py-28 px-6 bg-gradient-to-br from-[#2a160d] via-[#3b2418] to-[#1a0e09] overflow-hidden">
      <div className="max-w-6xl mx-auto text-center text-[#f3e5d8]">

        {/* 🍫 HEADER */}
        <p className="uppercase tracking-widest text-sm text-[#d4a373]">
          Chocolate Day
        </p>

        <h2 className="mt-6 text-[30px] sm:text-[38px] font-extrabold">
          Three moments, three kinds of sweetness 🍫
        </h2>

        <p className="mt-4 text-sm text-[#e6ccb2]">
          Each time felt different. One stayed with you.
        </p>

        {/* 🍫 FULL EXPERIENCE (ONLY IF NOT SELECTED YET) */}
        {!showFinal && (
          <div className="mt-16 space-y-12">

            {/* 🔺 TOP ROW */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[videos[0], videos[1]].map((vid, i) => (
                <div key={vid.id} className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-xl bg-black">
                    <video
                      ref={(el) => (videoRefs.current[i] = el)}
                      src={vid.src}
                      muted
                      playsInline
                      onEnded={handleEnded}
                      className="w-full aspect-video object-contain"
                    />
                  </div>

                  <div className="px-4">
                    <h4 className="text-lg font-semibold">{vid.title}</h4>
                    <p className="mt-2 text-sm text-[#e6ccb2]">{vid.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 🔻 BOTTOM ROW */}
            <div className="flex justify-center">
              <div className="w-full md:w-2/3 space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl bg-black">
                  <video
                    ref={(el) => (videoRefs.current[2] = el)}
                    src={videos[2].src}
                    muted
                    playsInline
                    onEnded={handleEnded}
                    className="w-full aspect-video object-contain"
                  />
                </div>

                <div className="px-6 text-center">
                  <h4 className="text-xl font-semibold">{videos[2].title}</h4>
                  <p className="mt-3 text-sm text-[#e6ccb2]">
                    {videos[2].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ❓ QUESTION */}
        {allFinished && !showFinal && (
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

        {/* 🎁 FINAL (ONLY SAVED VIDEO) */}
        {showFinal && finalVideo && (
          <div className="mt-28 animate-fadeIn">
            <h3 className="text-[28px] sm:text-[36px] font-extrabold">
              This moment is yours 🍬
            </h3>

            <p className="mt-6 text-sm text-[#e6ccb2]">
              Some memories don’t need repeating.
            </p>

            <div className="mt-14 max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-black">
              <video
                src={finalVideo.src}
                controls
                className="w-full aspect-video object-contain"
              />
            </div>

            <a
              href={finalVideo.src}
              download
              className="inline-block mt-14 px-16 py-4 rounded-full bg-gradient-to-r from-[#d4a373] to-[#b08968] text-[#2a160d] shadow-2xl hover:scale-105 transition"
            >
              Download Your Chocolate Moment 🍫
            </a>

            <p className="mt-10 italic text-[#e6ccb2] text-sm">
              “Some sweetness stays, even when the moment passes.”
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
