import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../index.css";

const goals = [
  "Personal",
  "Intellectual",
  "Career",
  "Social",
  "Financial",
  "Physical",
];

function CategoriesOfGrowth() {

  const navigate = useNavigate();

  return (
    <motion.div
      className="goals-page-container"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <button
        className="back-arrow"
        onClick={() => navigate("/")}
        aria-label="Back to landing"
      >
        &#8592;
      </button>

      <h1>Categories of Growth</h1>

      <div className="goals-grid">
        {goals.map((goal) => (
          <div className="goal-box" key={goal}>
            {goal}
          </div>
        ))}

      </div>

    </motion.div>
  );
}

export default CategoriesOfGrowth;