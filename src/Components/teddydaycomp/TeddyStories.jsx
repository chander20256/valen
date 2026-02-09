import React from "react";

const TeddyStories = () => {
  return (
    <section className="relative w-full bg-[#fff6ef] py-24 px-6 overflow-hidden">

      {/* 🌸 SECTION TITLE */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-[26px] sm:text-[32px] md:text-[38px]
                       font-semibold tracking-[0.35em]
                       uppercase text-[#a46a3d]/70">
          Two Teddies 🧸🧸
        </h2>
        <p className="mt-6 text-[#7a4a2a] text-sm sm:text-base leading-relaxed">
          They may look small and silent 🤍,  
          but they carry pieces of my heart 💫.
        </p>
      </div>

      {/* 🧸 STORY 1 */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center mb-28">

        {/* STORY TEXT */}
        <div className="bg-white/60 backdrop-blur-md
                        border border-white/40
                        rounded-3xl p-10 shadow-lg">
          <h3 className="text-[22px] font-semibold text-[#8b5a35]">
            The First Teddy 🧸
          </h3>

          <p className="mt-6 text-[#6f4428] text-sm sm:text-base leading-relaxed">
            When we started talking more and more 💬,  
            there came a time when you went back home 🏡.  
            Things felt a little quieter without you around 🤍.
          </p>

          <p className="mt-4 text-[#6f4428] text-sm sm:text-base leading-relaxed">
            One day, you went to the market 🛍️ and saw a small shop full of teddies 🧸.  
            You clicked a picture 📸 and sent it to me —  
            just a simple moment, without knowing what it would become ✨.  
            I saved that picture quietly 🤍.
          </p>

          <p className="mt-4 text-[#6f4428] text-sm sm:text-base leading-relaxed">
            Later, when I came to your hometown to bring you back to college 🚆,  
            I went to the same market, stood in front of the same shop,  
            and searched for the teddy from that picture 🧸.
          </p>

          <p className="mt-4 text-[#6f4428] text-sm sm:text-base leading-relaxed">
            You had no idea 🤭.  
            And when I finally gave it to you 🎁,  
            I told you the whole story —  
            how I saved that picture 📷,  
            and how I wanted you to have something that reminded you of us 💖.
          </p>

          <p className="mt-6 italic text-[#9c6b43] text-sm">
            That was the first teddy I ever gave you 🧸 —  
            a memory wrapped in a surprise ✨.
          </p>
        </div>

        {/* STORY IMAGE */}
        <div className="flex justify-center">
          <img
            src="/video/WhatsApp_Image_2026-02-09_at_4.30.43_PM-removebg-preview.png"
            alt="First Teddy"
            className="w-[260px] sm:w-[320px] md:w-[360px]
                       rounded-3xl
                       shadow-xl
                       object-cover"
          />
        </div>
      </div>

      {/* 🧸 STORY 2 */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* STORY IMAGE */}
        <div className="flex justify-center order-2 md:order-1">
          <img
            src="/video/WhatsApp Image 2026-02-09 at 4.34.17 PM.jpeg"
            alt="Second Teddy"
            className="w-[260px] sm:w-[320px] md:w-[360px]
                       rounded-3xl
                       shadow-xl
                       object-cover"
          />
        </div>

        {/* STORY TEXT */}
        <div className="bg-white/60 backdrop-blur-md
                        border border-white/40
                        rounded-3xl p-10 shadow-lg
                        order-1 md:order-2">
          <h3 className="text-[22px] font-semibold text-[#8b5a35]">
            The Second Teddy 🤍
          </h3>

          <p className="mt-6 text-[#6f4428] text-sm sm:text-base leading-relaxed">
            You remember that day when we decided to meet 🤍.  
            We planned a small trip together — just two or three days —  
            but even before it started, it already felt special ✨.
          </p>

          <p className="mt-4 text-[#6f4428] text-sm sm:text-base leading-relaxed">
            We went to Shimla ❄️, and on the way there were so many little shops  
            filled with teddies 🧸.  
            I noticed how your eyes kept going back to them —  
            even though you never said you wanted one.
          </p>

          <p className="mt-4 text-[#6f4428] text-sm sm:text-base leading-relaxed">
            You didn’t ask 🤍,  
            but somewhere inside, I knew how much you wanted it.
          </p>

          <p className="mt-4 text-[#6f4428] text-sm sm:text-base leading-relaxed">
            After we came back from Shimla,  
            we stopped at one of those shops 🛍️.  
            I looked at you and told you to pick any one you liked.
          </p>

          <p className="mt-4 text-[#6f4428] text-sm sm:text-base leading-relaxed">
            When you chose that teddy 🧸,  
            the shine in your eyes ✨ and the smile on your face 🤍  
            were priceless for me.  
            That moment stayed with me.
          </p>

          <p className="mt-6 italic text-[#9c6b43] text-sm">
            That teddy is special —  
            because it carries your smile 💖.
          </p>
        </div>
      </div>

      {/* 🤍 CLOSING LINE */}
      <div className="mt-28 text-center max-w-2xl mx-auto">
        <p className="text-[#7a4a2a] text-sm sm:text-base leading-relaxed">
          Two teddies 🧸🧸, two stories —  
          but both are meant to remind you of one thing 🤍.
        </p>

        <p className="mt-4 font-semibold text-[#8b5a35]">
          You are deeply cared for, always 💖
        </p>
      </div>

    </section>
  );
};

export default TeddyStories;
