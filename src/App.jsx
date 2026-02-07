import { BrowserRouter, Routes, Route } from "react-router-dom";

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

        {/* 🔐 PASSWORD PAGE */}
        <Route path="/unlock" element={<PasswordGate />} />

        {/* 🔒 PROTECTED ROUTES */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <LandingPage />
            </ProtectedRoute>
          }
        />

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
