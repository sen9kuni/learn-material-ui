import React from "react";
import { Routes, Route } from "react-router-dom";
import Albums from "./pages/Albums";
import Signature from "./pages/Signature";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Albums />} />
      <Route path="/ttd" element={<Signature />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
