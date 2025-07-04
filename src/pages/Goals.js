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

function Goals() {

  const navigate = useNavigate();

  // Helper to create a URL-friendly path
  const toPath = (goal) =>
    `/goals/${goal.toLowerCase().replace(/\s+/g, "-")}`;

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
        aria-label="Back to landing page"
      >
        &#8592;
      </button>

      <h1>Categories of Growth</h1>

      <div className="goals-grid">
        {goals.map((goal) => (
          <div className="goal-box" key={goal}
            onClick={() => navigate(toPath(goal))}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                navigate(toPath(goal));
              }
            }}
            aria-label={`View goals for ${goal}`}
          >
            {goal}
          </div>
        ))}

      </div>

    </motion.div>
  );
}

export default Goals;