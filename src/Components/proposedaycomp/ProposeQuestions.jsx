import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";

/* ================= QUESTIONS ================= */

const emotionalQuestions = [
  {
    type: "emotion",
    icon: "💫",
    q: "Do you believe that some people are meant to meet?",
    line: "Some meetings feel written long before they happen.",
    yesEmoji: "✨",
    maybeEmoji: "💭",
    whisper: "I felt that when I met you."
  },
  {
    type: "emotion",
    icon: "🫶",
    q: "Do you feel safe being yourself with me?",
    line: "Being real is the most beautiful thing there is.",
    yesEmoji: "💞",
    maybeEmoji: "🤍",
    whisper: "You never have to pretend with me."
  },
  {
    type: "emotion",
    icon: "😊",
    q: "Do you smile when you think about us?",
    line: "Because even the quiet moments matter.",
    yesEmoji: "😊",
    maybeEmoji: "🌸",
    whisper: "Your smile stays with me."
  },
  {
    type: "emotion",
    icon: "🌱",
    q: "Can you imagine a future where we grow together?",
    line: "Not perfect — just honest and shared.",
    yesEmoji: "🌱",
    maybeEmoji: "🌷",
    whisper: "I see us learning, slowly."
  },
  {
    type: "emotion",
    icon: "💍",
    q: "Will you let me choose you, every single day?",
    line: "Even when love is gentle and quiet.",
    yesEmoji: "💍",
    maybeEmoji: "🕊️",
    whisper: "This matters to me."
  }
];

const deepQuestions = [
  {
    type: "options",
    icon: "❤️",
    q: "Are you happy with me?",
    options: [
      "💕 Yes, I feel happy and safe with you",
      "🌱 I’m happy, but we can grow more",
      "🤍 I’m still understanding my feelings"
    ]
  },
  {
    type: "options",
    icon: "👶",
    q: "In the future, what would you want?",
    options: [
      "👧 A baby girl",
      "👦 A baby boy",
      "💫 Whatever God gives us"
    ]
  },
  {
    type: "options",
    icon: "😔",
    q: "What do you feel when I talk rudely to you?",
    options: [
      "😔 It hurts me",
      "💭 I feel sad but understand sometimes",
      "🤍 I forgive you, but want gentleness"
    ]
  },
  {
    type: "options",
    icon: "💖",
    q: "Why do you love me?",
    options: [
      "🫶 Because you understand me",
      "💫 Because you care in your own way",
      "❤️ Because my heart chose you"
    ]
  },
  {
    type: "options",
    icon: "🌍",
    q: "Why did you choose me?",
    options: [
      "🛡️ You make me feel safe",
      "🤝 You respect my feelings",
      "💍 I see a future with you"
    ]
  }
];

const questions = [...emotionalQuestions, ...deepQuestions];

/* ================= COMPONENT ================= */

const ProposeQuestions = () => {
  const [step, setStep] = useState("questions");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [reaction, setReaction] = useState(null);
  const [showWhisper, setShowWhisper] = useState(false);
  const [proposalAnswer, setProposalAnswer] = useState("");

  const [noMessage, setNoMessage] = useState("");

  const captureRef = useRef(null);
  const proposalRef = useRef(null);

  const currentQ =
    step === "questions" && current < questions.length
      ? questions[current]
      : null;

  /* ===== QUESTION HANDLERS ===== */
  const handleEmotionAnswer = (type) => {
    if (!currentQ) return;

    setReaction(type === "yes" ? currentQ.yesEmoji : currentQ.maybeEmoji);
    setShowWhisper(true);

    setAnswers((p) => ({
      ...p,
      [current]: type === "yes" ? "Yes 💖" : "Maybe 🌸"
    }));

    setTimeout(() => {
      setReaction(null);
      setShowWhisper(false);
      current + 1 < questions.length
        ? setCurrent((c) => c + 1)
        : setStep("proposal");
    }, 1200);
  };

  const handleOptionSelect = (opt) => {
    setAnswers((p) => ({ ...p, [current]: opt }));
    setTimeout(() => {
      current + 1 < questions.length
        ? setCurrent((c) => c + 1)
        : setStep("proposal");
    }, 600);
  };

  /* ===== NO BUTTON RUN AWAY ===== */
  const escapeNoButton = () => {
    const container = proposalRef.current;
    if (!container) return;

    setNoMessage("Are you sure? 😠");

    const padding = 100;
    const maxX = container.offsetWidth - padding * 2;
    const maxY = container.offsetHeight - padding * 2;

    const x = Math.random() * maxX - maxX / 2;
    const y = Math.random() * maxY - maxY / 2;

    container.querySelector(".no-btn").style.transform =
      `translate(${x}px, ${y}px)`;
  };

  /* ===== SAVE IMAGE ===== */
  const saveAsImage = async () => {
    if (!captureRef.current) return;

    await new Promise((r) => setTimeout(r, 300));

    const canvas = await html2canvas(captureRef.current, {
      scale: 2,
      backgroundColor: "#ffffff"
    });

    const link = document.createElement("a");
    link.download = "our-moment.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-white py-32 px-6 flex items-center justify-center">

      {/* ================= QUESTIONS ================= */}
      {step === "questions" && currentQ && (
        <div className="bg-white/70 backdrop-blur-xl rounded-[40px] shadow-2xl px-12 py-16 max-w-4xl text-center">
          <p className="text-rose-400 text-xs tracking-widest mb-4">
            Question {current + 1} of {questions.length}
          </p>

          <h3 className="text-xl sm:text-2xl font-medium text-rose-700">
            {currentQ.icon} {currentQ.q}
          </h3>

          {currentQ.type === "emotion" && (
            <>
              <p className="mt-6 italic text-rose-500">{currentQ.line}</p>
              {reaction && <div className="mt-10 text-4xl">{reaction}</div>}
              {showWhisper && (
                <p className="mt-4 text-sm italic text-rose-400">
                  {currentQ.whisper}
                </p>
              )}
              <div className="mt-14 flex justify-center gap-10">
                <button
                  onClick={() => handleEmotionAnswer("yes")}
                  className="px-12 py-3 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white"
                >
                  Yes 💖
                </button>
                <button
                  onClick={() => handleEmotionAnswer("maybe")}
                  className="px-12 py-3 rounded-full border border-rose-300 text-rose-600"
                >
                  Maybe 🌸
                </button>
              </div>
            </>
          )}

          {currentQ.type === "options" && (
            <div className="mt-12 space-y-4 text-left">
              {currentQ.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleOptionSelect(opt)}
                  className="w-full p-4 rounded-xl border border-rose-200 hover:bg-rose-100 text-rose-600"
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ================= PROPOSAL ================= */}
      {step === "proposal" && (
        <div ref={proposalRef} className="relative text-center space-y-14 px-10 py-20">
          <h1 className="text-4xl sm:text-5xl font-semibold text-rose-700">
            Will you be mine forever? 💍
          </h1>

          {noMessage && <p className="text-rose-600 font-medium">{noMessage}</p>}

          <div className="relative flex justify-center gap-20">
            <button
              onClick={() => {
                setProposalAnswer("YES ❤️");
                setStep("result");
              }}
              className="px-16 py-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white text-lg"
            >
              Yes ❤️
            </button>

            <button
              onMouseEnter={escapeNoButton}
              className="no-btn px-16 py-4 rounded-full border border-rose-300 text-rose-600 text-lg transition-transform duration-300"
            >
              No 🤍
            </button>
          </div>
        </div>
      )}

      {/* ================= RESULT ================= */}
      {step === "result" && (
        <div className="text-center">
          <div
            ref={captureRef}
            className="capture-safe rounded-[36px] p-12 max-w-3xl mx-auto text-left"
          >
            <h1 className="text-5xl font-bold text-center mb-12">
              {proposalAnswer}
            </h1>

            {questions.map((q, i) => (
              <div key={i} className="mb-6">
                <p className="font-medium">
                  {q.icon} {q.q}
                </p>
                <p className="italic mt-1">{answers[i]}</p>
              </div>
            ))}

            <p className="text-center text-xs mt-10">
              {new Date().toLocaleDateString()}
            </p>
          </div>

          <button
            onClick={saveAsImage}
            className="mt-12 px-14 py-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-xl hover:scale-105 transition"
          >
            Save This Moment 💖
          </button>
        </div>
      )}
    </section>
  );
};

export default ProposeQuestions;
