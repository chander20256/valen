import React, { useState } from "react";

const SECRET_PASSWORD = "My_Cute_Little_Baby_Eleplant";
const STORAGE_KEY = "valentine_access_granted";

const PasswordGate = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === SECRET_PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "true");

      // 🔁 Force re-render WITHOUT changing URL
      window.location.reload();
    } else {
      setError("That’s not the right password 💔");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-100 to-rose-200 px-6">
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl px-10 py-14 max-w-md w-full text-center">
        <h1 className="text-3xl font-semibold text-rose-700 mb-4">
          A Little Secret 💌
        </h1>

        <p className="text-rose-500 text-sm mb-8">
          This place is only for someone special.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="password"
            placeholder="Enter the password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-3 rounded-full border border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
          />

          {error && <p className="text-sm text-rose-600">{error}</p>}

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-medium shadow-lg hover:scale-105 transition"
          >
            Enter 💖
          </button>
        </form>
      </div>
    </section>
  );
};

export default PasswordGate;
