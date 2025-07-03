import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css";
import PersonalGoals from "./PersonalGoals";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <motion.div
      className="landing-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
    >
      <h1>20th Year Vision Board</h1>
      <p>
        I just turned 20, which means the start of a new year and a new decade.
        <br />
        These are my goals for the next year...
      </p>
      <button className="start-btn" onClick={() => navigate("/personal-goals")}>
        Start
      </button>
    </motion.div>
  );
}

function App() {
  return (
    <Router basename="/20th-year-vision-board">
      <Routes>
        <Route
          path="/"
          element={
            <AnimatePresence mode="wait">
              <LandingPage />
            </AnimatePresence>
          }
        />
        <Route
          path="/personal-goals"
          element={
            <AnimatePresence mode="wait">
              <PersonalGoals />
            </AnimatePresence>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;