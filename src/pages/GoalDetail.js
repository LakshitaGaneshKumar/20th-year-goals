import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../index.css";

function formatTitle(slug) {
  return slug
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

function GoalDetail() {
  const { goalSlug } = useParams();
  const navigate = useNavigate();
  const title = formatTitle(goalSlug);

  // Example: You can add more detailed goals for each category here
  const exampleGoals = {
    "personal": [
      "Practice daily gratitude journaling",
      "Develop a morning routine",
      "Read one self-improvement book per month",
    ],
    "intellectual": [
      "Complete an online course in a new subject",
      "Attend monthly lectures or workshops",
      "Start a blog to share what I learn",
    ],
    "mental": [
      "Meditate for 10 minutes every day",
      "See a therapist or counselor regularly",
      "Practice mindfulness in daily activities",
    ],
    "career": [
      "Update my resume and LinkedIn profile",
      "Apply for internships in my field",
      "Network with professionals monthly",
    ],
    "social": [
      "Reconnect with old friends",
      "Attend at least one social event per month",
      "Volunteer for a community project",
    ],
    "financial": [
      "Save $5,000 this year",
      "Create a monthly budget",
      "Invest in stocks or mutual funds",
    ],
    "physical": [
      "Exercise 4 times a week",
      "Run a 10k race",
      "Cook healthy meals at home",
    ],
  };

  return (
    <motion.div
      className="goals-page-container"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <button
        className="back-arrow"
        onClick={() => navigate(-1)}
        aria-label="Back to categories page"
      >
        &#8592;
      </button>
      <h1>{title}</h1>
      <ul>
        {(exampleGoals[goalSlug] || [
          `Example goal for ${title}`,
          "Add your own goals here!",
        ]).map((g, i) => (
          <li key={i}>{g}</li>
        ))}
      </ul>
    </motion.div>
  );
}

export default GoalDetail;