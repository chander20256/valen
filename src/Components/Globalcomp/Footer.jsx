import React from "react";

const Footer = () => {
  return (
    <footer
      className="
        relative
        w-full
        bg-gradient-to-br from-rose-200 to-pink-300
        pt-20 pb-10
        px-6
      
      "
    >
      {/* 💗 Divider */}
      {/* <div className="max-w-5xl mx-auto mb-12">
        <div className="h-px bg-white/40" />
      </div> */}

      {/* 🌸 Main Content */}
      <div className="max-w-5xl mx-auto text-center text-rose-800 space-y-6">

        <p className="text-[11px] tracking-[0.35em] uppercase text-rose-500">
          Always & Forever
        </p>

        <h3 className="text-xl sm:text-2xl font-semibold leading-snug">
          Some stories don’t need endings,
          <br className="hidden sm:block" />
          they just keep growing quietly.
        </h3>

        <p className="text-sm sm:text-base text-rose-600 max-w-xl mx-auto">
          This little space holds moments, memories, and feelings that words
          sometimes fail to explain — but hearts always understand.
        </p>
      </div>

      {/* 🤍 Bottom Line */}
      <div className="mt-16 text-center text-xs text-rose-600">
        <p>
          Made with <span className="text-rose-700">❤</span> by you,
          <br className="sm:hidden" />
          for the one who feels like home.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
