import React from "react";
import { Routes, Route } from "react-router-dom";
import Albums from "./pages/Albums";
import Signature from "./pages/Signature";
import Dashboard from "./pages/Dashboard";
import LabDummy from "./pages/labdummy";
import CoinsMarket from "./pages/coins";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Albums />} />
      <Route path="/ttd" element={<Signature />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/lab" element={<LabDummy />} />
      <Route path="/coins" element={<CoinsMarket />} />
    </Routes>
  );
}

export default App;
