import React from "react";

const PromiseVows = () => {
  return (
    <section className="relative py-36 px-6 bg-[#fffaf6] overflow-hidden">
      {/* 🌸 BACKGROUND IMAGES — ZIG ZAG PATTERN */}

      {/* 1️⃣ TOP LEFT */}
      <img
        src="public\New folder\WhatsApp Image 2026-02-11 at 4.25.32 PM.jpeg"
        alt="img"
        className="
          absolute
          top-10
          left-8 sm:left-14
          w-[160px] sm:w-[190px] md:w-[220px]
        opacity-60
          rotate-[-10deg]
          pointer-events-none
        "
      />

      {/* 2️⃣ CENTER RIGHT */}
      <img
        src="public\New folder\WhatsApp Image 2026-02-11 at 4.26.25 PM.jpeg"
        alt="img"
        className="
          absolute
          top-1/2
          right-8 sm:right-14
          -translate-y-1/2
          w-[170px] sm:w-[200px] md:w-[230px]
          opacity-60
          rotate-[12deg]
          pointer-events-none
        "
      />

      {/* 3️⃣ BOTTOM LEFT */}
      <img
        src="public\New folder\WhatsApp Image 2026-02-11 at 4.26.26 PM.jpeg"
        alt="img"
        className="
          absolute
          bottom-14
          left-10 sm:left-20
          w-[150px] sm:w-[180px] md:w-[210px]
          opacity-60
          rotate-[-6deg]
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-3xl mx-auto text-left sm:text-center">
        {/* TITLE */}
        <h2 className="mb-10 text-[22px] sm:text-[26px] font-semibold text-[#6a404a]">
          Betu, yeh sirf words nahi hain
        </h2>

        <p className="text-[#5a333d] text-[18px] sm:text-[19px] leading-relaxed">
          Betu, mujhe pata hai{" "}
          <span className="font-semibold text-[#3f1f27]">
            main perfect nahi hoon
          </span>.
          <br /><br />
          Mujhse{" "}
          <span className="font-semibold text-[#3f1f27]">
            galtiyaan hongi
          </span>.
          Kabhi main sahi words nahi bol paunga.
          Kabhi main aapko samajhne mein late ho jaunga.
          <br /><br />
          Lekin ek baat main{" "}
          <span className="font-semibold text-[#3f1f27]">dil se</span>{" "}
          kehna chahta hoon —
          <br /><br />
          <span className="font-semibold text-[#3f1f27]">
            main aapko shhod ke kabhi nahi jaunga.
          </span>
          <br /><br />
          Jab cheezein{" "}
          <span className="font-semibold text-[#3f1f27]">easy</span>{" "}
          hongi tab bhi nahi,
          aur jab sab kuch{" "}
          <span className="font-semibold text-[#3f1f27]">mushkil</span>{" "}
          lagega tab bhi nahi.
          <br /><br />
          Kyunki aap mere liye sirf ek decision nahi ho.
          <br />
          <span className="font-semibold text-[#3f1f27]">
            Aap meri wife ho
          </span>,
          <br />
          <span className="font-semibold text-[#3f1f27]">
            meri life ho
          </span>,
          <br />
          aur main apna{" "}
          <span className="font-semibold text-[#3f1f27]">future</span>{" "}
          aapke saath dekhna chahta hoon —
          <br />
          hamari ek chhoti si duniya ke saath,
          aur{" "}
          <span className="font-semibold text-[#3f1f27]">
            hamari beti
          </span>{" "}
          ke saath.
        </p>
      </div>
    </section>
  );
};

export default PromiseVows;
