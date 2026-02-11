import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import LandingPage from "./Pages/LandingPage";
import Week from "./Pages/Week";
import RoseDay from "./Pages/RoseDay";
import ProposeDay from "./Pages/ProposeDay";
import Promiseday from "./Pages/Promiseday"; // 🤍 NEW
import ChocolateDay from "./Pages/ChocolateDay";
import TeddyDay from "./Pages/TeddyDay"; // 🧸
import PasswordGate from "./Pages/PasswordGate";

/* 🔒 Route Guard */
const RequireUnlock = ({ unlocked, onUnlock, children }) => {
  if (!unlocked) {
    return <PasswordGate onUnlock={onUnlock} />;
  }
  return children;
};

function App() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    sessionStorage.removeItem("valentine_unlocked");
    setUnlocked(false);
  }, []);

  return (
    <BrowserRouter>
      <Routes>

        {/* 🔑 ROOT */}
        <Route
          path="/"
          element={
            unlocked ? (
              <LandingPage />
            ) : (
              <PasswordGate onUnlock={() => setUnlocked(true)} />
            )
          }
        />

        {/* 🔒 PROTECTED ROUTES */}
        <Route
          path="/week"
          element={
            <RequireUnlock unlocked={unlocked} onUnlock={() => setUnlocked(true)}>
              <Week />
            </RequireUnlock>
          }
        />

        <Route
          path="/rose-day"
          element={
            <RequireUnlock unlocked={unlocked} onUnlock={() => setUnlocked(true)}>
              <RoseDay />
            </RequireUnlock>
          }
        />

        <Route
          path="/propose-day"
          element={
            <RequireUnlock unlocked={unlocked} onUnlock={() => setUnlocked(true)}>
              <ProposeDay />
            </RequireUnlock>
          }
        />

        {/* 🤍 PROMISE DAY */}
        <Route
          path="/promise-day"
          element={
            <RequireUnlock unlocked={unlocked} onUnlock={() => setUnlocked(true)}>
              <Promiseday />
            </RequireUnlock>
          }
        />

        <Route
          path="/chocolate-day"
          element={
            <RequireUnlock unlocked={unlocked} onUnlock={() => setUnlocked(true)}>
              <ChocolateDay />
            </RequireUnlock>
          }
        />

        {/* 🧸 TEDDY DAY – FEB 10 */}
        <Route
          path="/teddy-day"
          element={
            <RequireUnlock unlocked={unlocked} onUnlock={() => setUnlocked(true)}>
              <TeddyDay />
            </RequireUnlock>
          }
        />

        {/* 🚫 FALLBACK */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
