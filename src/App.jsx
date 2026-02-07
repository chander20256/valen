import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import LandingPage from "./Pages/LandingPage";
import Week from "./Pages/Week";
import RoseDay from "./Pages/RoseDay";
import ProposeDay from "./Pages/ProposeDay";
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

  // 🔁 ALWAYS reset on reload
  useEffect(() => {
    sessionStorage.removeItem("valentine_unlocked");
    setUnlocked(false);
  }, []);

  return (
    <BrowserRouter>
      <Routes>

        {/* 🔑 ROOT — PASSWORD FIRST */}
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

        {/* 🔒 PROTECTED ROUTES (ALWAYS DEFINED) */}
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

        {/* 🚫 OPTIONAL FALLBACK */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
