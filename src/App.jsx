import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // Import Layout
import Home from "./pages/Home";
import Suggestions from "./pages/Suggestions";
import Feedback from "./pages/Feedback";
import About from "./pages/About";
import Interests from "./pages/interests";

const App = () => (
  <Router>
    <Routes>
      {/* ใช้ Layout ครอบทุกหน้า */}
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/suggestions" element={<Layout><Suggestions /></Layout>} />
      <Route path="/feedback" element={<Layout><Feedback /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/interests" element={<Layout><Interests /></Layout>} />
    </Routes>
  </Router>
);

export default App;
