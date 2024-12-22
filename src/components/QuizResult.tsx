import React from "react";
import { motion } from "framer-motion";

interface QuizResultProps {
  handleRestart: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({ handleRestart }) => {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h3
  className="text-2xl font-bold mb-4"
  initial={{ scale: 0.8, opacity: 0, color: "#0cf662" }} // Green
  animate={{ scale: 1, opacity: 1, color: "#eb5f1f" }} // Yellow
  transition={{ duration: 1, delay: 0.3 }}
>
  You're a star! Keep shining!
</motion.h3>
      <motion.button
        onClick={handleRestart}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        Restart
      </motion.button>
    </motion.div>
  );
};

export default QuizResult;
