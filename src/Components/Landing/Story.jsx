import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Story = () => {
  return (
    <section
      id="story"
      className="
        relative
        w-full
        px-6
        py-24
        md:py-32
        bg-gradient-to-br from-rose-100 to-pink-200
      "
    >
      {/* 💌 STORY TITLE */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <p className="text-[11px] tracking-[0.35em] uppercase text-rose-400 mb-4">
          A Love Letter
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-rose-700 leading-snug">
          Your first lover letter for me
        </h2>
        <p className="mt-4 text-sm sm:text-base text-rose-500">
          Written from the quiet moments where where heart always finds me.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-24 text-rose-700 leading-relaxed">

        {/* ROW 1 — TEXT LEFT + GIF RIGHT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <p className="mb-6">Hey baby,</p>
            <p>
              Today is our day and I just want to say thank you for being the reason
              my world feels so warm, so beautiful, so alive.
            </p>
          </div>

          {/* 🎀 GIF 1 */}
          <div className="flex justify-center md:justify-end">
            <div
              className="
                w-44 h-44
                sm:w-52 sm:h-52
                md:w-60 md:h-60
                lg:w-72 lg:h-72
              "
            >
              <DotLottieReact
                src="https://lottie.host/79305d8f-0d07-4139-8790-01aeb0f29e53/QV06KTfmJk.lottie"
                autoplay
                loop
              />
            </div>
          </div>
        </div>

        {/* ROW 2 — TEXT RIGHT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:col-start-2 text-center md:text-right">
            <p>
              It all began back in August, remember? You came to my college and I saw you
              for the first time. You didn’t notice me, but I noticed you.
              At first, I was so scared to even talk to you that I couldn’t say a word.
              But destiny had something else planned.
            </p>
          </div>
        </div>

        {/* ROW 3 — TEXT LEFT + GIF RIGHT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <p>
              One random moment, one small conversation, and suddenly everything changed.
              Then September came when you said those magic words — <em>I love you</em>.
              I don’t know what I truly felt then, but slowly, with time,
              something inside me began to move.
            </p>
          </div>

          {/* 🎀 GIF 2 */}
          
        </div>

        {/* ROW 4 — TEXT RIGHT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:col-start-2 text-center md:text-right">
            <p>
              Sometimes when you talked about others, I don’t know why it hurt a little.
              I suddenly felt jealous, and that’s when I realized
              maybe I do have some feelings for you.
              That realization changed everything.
            </p>
          </div>
        </div>

        {/* ROW 5 — TEXT LEFT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <p>
              Before you, my days were silent. I used to sit alone on the balcony,
              lost in thoughts, overthinking everything.
              But after you came, everything slowly started to bloom again.
              Fear turned into love, and I didn’t even realize when it happened.
            </p>
          </div>
        </div>

        {/* ROW 6 — TEXT RIGHT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="flex justify-center md:justify-start">
            <div
              className="
                w-44 h-44
                sm:w-52 sm:h-52
                md:w-60 md:h-60
                lg:w-72 lg:h-72
              "
            >
              <DotLottieReact
                src="https://lottie.host/af620492-d9f6-4935-b73c-37b1826d6948/tEoyMTeyvJ.lottie"
                autoplay
                loop
              />
            </div>
          </div>
          <div className="md:col-start-2 text-center md:text-right">
            <p>
              It’s been three months now and honestly, I have never been this happy.
              You are my peace, my person, my friend — who turned into my love,
              who turned into my everything.
            </p>
          </div>
         
        </div>

        {/* ROW 7 — TEXT LEFT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <p>
              Sometimes I mess up. Sometimes I say things that hurt you unintentionally.
              But everything I do, my heart aches a little because no matter what,
              you are everything for me.
            </p>
          </div>
          
        </div>

        {/* ❤️ FINAL */}
        <div className="text-center pt-16 font-semibold">
          <p>
            You are my 11:11 wish…<br />
            and I just want this wish to last forever.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Story;
