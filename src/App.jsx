import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import Week from "./Pages/Week";
import RoseDay from "./Pages/RoseDay";
import ProposeDay from "./Pages/ProposeDay";
import PasswordGate from "./Pages/PasswordGate";
import ProtectedRoute from "./Components/Globalcomp/ProtectedRoute";

const STORAGE_KEY = "valentine_access_granted";

function App() {
  const isUnlocked = localStorage.getItem(STORAGE_KEY) === "true";

  return (
    <BrowserRouter>
      <Routes>

        {/* 🔑 ROOT DECIDES WHAT TO SHOW */}
        <Route
          path="/"
          element={isUnlocked ? <LandingPage /> : <PasswordGate />}
        />

        {/* 🔒 PROTECTED ROUTES */}
        <Route
          path="/week"
          element={
            <ProtectedRoute>
              <Week />
            </ProtectedRoute>
          }
        />

        <Route
          path="/rose-day"
          element={
            <ProtectedRoute>
              <RoseDay />
            </ProtectedRoute>
          }
        />

        <Route
          path="/propose-day"
          element={
            <ProtectedRoute>
              <ProposeDay />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
