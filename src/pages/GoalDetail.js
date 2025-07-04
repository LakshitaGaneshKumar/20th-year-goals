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
  const goals = {
    "personal": [
      "Practice at least 5 minutes of gratitude and journaling daily.",
      "Explore a new hobby at least once a month (e.g., painting, photography, writing).",
      "Reflect on your personal growth and vision board every two weeks to stay aligned with your goals.",
    ],
    "intellectual": [
      "Launch a new version/update to Stylistic every 3 months until July 2026, where Stylistic will be a fully functional product with at least 100 active users.",
      "Complete 3 online courses in areas of interest (e.g., AI, web development, design).",
      "Read at least 12 books this year, focusing on personal development and professional growth including entrepreneurship, leadership, and technology.",
    ],
    "career": [
      "Attend at least 2 industry conferences or networking events this year to expand your professional network.",
      "Build a personal website or portfolio to showcase your work and skills by the end of the year.",
      "Learn a new programming language or framework (e.g., Python, React, etc.) by completing 4 small side projects in addition to Stylistic.",
    ],
    "social": [
      "Plan and host 1 intentional hangout per quarter (4 total this year) with your closest friends, focused on connection and fun (e.g., picnic, dinner party).",
      "Review your social circle every month and reflect in your journal about who energizes vs drains you. Set 1 boundary if needed.",
      "Give at least 1 genuine compliment or uplifting interaction per day (365 total) to practice confident kindness and help others feel seen.",
    ],
    "financial": [
      "Log your income, expenses, and savings every Sunday (52x/year) using Notion or a spreadsheet to stay organized and mindful.",
      "Watch 1 personal finance video or read 1 article per week (52 total) to learn about budgeting, investing, and financial literacy.",
      "Plan and save for a trip to a new country or city by July 2026, budgeting at least $1000 for travel expenses.",
    ],
    "physical": [
      "Lift 5x a week for at least 1 hour, ending the session with 45 minutes of cardio (running, cycling, etc.) to improve overall fitness.",
      "Drink at least 2 liters of water daily to stay hydrated and healthy.",
      "Incorporate 30 minutes of yoga or stretching into your routine at least 3 times a week to improve flexibility and relaxation.",
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
        {(goals[goalSlug] || [
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