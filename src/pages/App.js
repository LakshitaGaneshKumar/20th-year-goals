import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css";
import CategoriesOfGrowth from "./CategoriesOfGrowth";

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
        I just turned 20, which means the start of a 
        <br />
        new year and a new decade.
        <br />
        These are my goals for the next year...
      </p>
      <button className="start-btn" onClick={() => navigate("/categories-of-growth")}>
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
          path="/categories-of-growth"
          element={
            <AnimatePresence mode="wait">
              <CategoriesOfGrowth />
            </AnimatePresence>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;