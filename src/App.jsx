import { Routes, Route } from "react-router-dom";
import SmartFlipToolsSiteMockup from "./components/SmartFlipToolsSiteMockup.jsx";
import SmartFlipToolsDashboard from "./components/SmartFlipToolsDashboard.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SmartFlipToolsSiteMockup />} />
      <Route path="/cabinet" element={<SmartFlipToolsDashboard />} />
    </Routes>
  );
}
