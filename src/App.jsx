import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Week from "./Pages/Week";
import RoseDay from "./Pages/RoseDay";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/week" element={<Week />} />
        <Route path="/rose-day" element={<RoseDay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
