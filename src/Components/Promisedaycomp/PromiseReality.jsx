import React from "react";

const PromiseReality = () => {
  return (
    <section className="relative py-36 px-6 bg-gradient-to-b from-[#fffaf6] to-[#f3e6ea] overflow-hidden">
      {/* 🌙 BACKGROUND IMAGE */}
      <img
        src="/images/soft-shadow-center.png"
        alt=""
        className="absolute inset-x-0 top-10 mx-auto w-[260px] opacity-15 pointer-events-none"
      />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* 📝 LEFT SIDE — TEXT */}
          <div className="text-left sm:text-center md:text-left max-w-xl mx-auto md:mx-0">
            {/* TITLE */}
            <h3 className="mb-12 text-[22px] sm:text-[26px] font-semibold text-[#6a404a]">
              Betu, jab sab kuch easy nahi hota
            </h3>

            <p className="text-[#4b2630] text-[18px] sm:text-[19px] leading-relaxed">
              Main yeh promise nahi kar raha
              ki hum kabhi{" "}
              <span className="font-semibold text-[#3f1f27]">
                ladein nahi
              </span>.
              <br /><br />
              Kabhi{" "}
              <span className="font-semibold text-[#3f1f27]">
                gussa
              </span>{" "}
              hoga.
              Kabhi{" "}
              <span className="font-semibold text-[#3f1f27]">
                misunderstanding
              </span>{" "}
              hogi.
              Kabhi aisa lagega ki sab kuch{" "}
              <span className="font-semibold text-[#3f1f27]">
                heavy
              </span>{" "}
              ho gaya hai.
              <br /><br />
              Lekin ek baat jo main{" "}
              <span className="font-semibold text-[#3f1f27]">
                bilkul sure
              </span>{" "}
              hoon —
              <br /><br />
              chahe{" "}
              <span className="font-semibold text-[#3f1f27]">
                situation
              </span>{" "}
              kuch bhi ho,
              chahe{" "}
              <span className="font-semibold text-[#3f1f27]">
                halat
              </span>{" "}
              kaise bhi ho,
              <br /><br />
              <span className="font-semibold text-[#3f1f27] text-[20px]">
                main aapko shhod ke nahi jaunga.
              </span>
              <br /><br />
              Agar aap{" "}
              <span className="font-semibold text-[#3f1f27]">
                thak
              </span>{" "}
              jao,
              agar aap{" "}
              <span className="font-semibold text-[#3f1f27]">
                chup
              </span>{" "}
              ho jao,
              agar aapko lage ki aap{" "}
              <span className="font-semibold text-[#3f1f27]">
                akeli
              </span>{" "}
              ho —
              <br /><br />
              <span className="font-semibold text-[#3f1f27]">
                main wahin rahunga, Betu.
              </span>
              <br /><br />
              Kyunki mujhe pata hai,{" "}
              <span className="font-semibold text-[#3f1f27]">
                main aapko kabhi nahi shhod sakta.
              </span>
            </p>
          </div>

          {/* 🎥 RIGHT SIDE — VIDEO */}
          <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-white/30 bg-white/40 backdrop-blur-md">
            <video
              src="/video/Thirdlovevideo.mp4"
              className="w-full h-[260px] sm:h-[620px]  object-cover"
              controls
              playsInline
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default PromiseReality;
