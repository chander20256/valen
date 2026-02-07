import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import Week from "./Pages/Week";
import RoseDay from "./Pages/RoseDay";
import ProposeDay from "./Pages/ProposeDay";
import PasswordGate from "./Pages/PasswordGate";
import ProtectedRoute from "./Components/Globalcomp/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🔐 ENTRY POINT */}
        <Route path="/unlock" element={<PasswordGate />} />

        {/* 🚫 ROOT ALWAYS GOES TO UNLOCK */}
        <Route path="/" element={<Navigate to="/unlock" replace />} />

        {/* 🏠 PROTECTED HOME */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <LandingPage />
            </ProtectedRoute>
          }
        />

        {/* 🔒 OTHER PROTECTED ROUTES */}
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

        {/* ❌ ANY UNKNOWN URL */}
        <Route path="*" element={<Navigate to="/unlock" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
