import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import LandingPage from "./Pages/LandingPage";
import Week from "./Pages/Week";
import RoseDay from "./Pages/RoseDay";
import ProposeDay from "./Pages/ProposeDay";
import PasswordGate from "./Pages/PasswordGate";

function App() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    // ALWAYS reset on reload
    sessionStorage.removeItem("valentine_unlocked");
    setUnlocked(false);
  }, []);

  return (
    <BrowserRouter>
      <Routes>

        {/* 🔑 ROOT — ALWAYS PASSWORD FIRST */}
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

        {/* 🔒 Other pages ONLY after unlock */}
        {unlocked && (
          <>
            <Route path="/week" element={<Week />} />
            <Route path="/rose-day" element={<RoseDay />} />
            <Route path="/propose-day" element={<ProposeDay />} />
          </>
        )}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
