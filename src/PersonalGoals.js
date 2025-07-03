import React from "react";
import { motion } from "framer-motion";
import "./index.css";

function PersonalGoals() {
  return (
    <motion.div
      className="landing-container"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Personal Goals</h1>
    </motion.div>
  );
}

export default PersonalGoals;