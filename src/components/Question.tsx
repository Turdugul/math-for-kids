import React from "react";
import { motion } from "framer-motion";

interface QuestionDisplayProps {
  question: string;
  userAnswer: string;
  setUserAnswer: (value: string) => void;
  handleSubmit: () => void;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  question,
  userAnswer,
  setUserAnswer,
  handleSubmit,
}) => {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex flex-col sm:flex-row gap-3 p-4"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="text-xl mb-1">{question} = </div>
        <motion.input
          type="number"
          value={userAnswer}
          placeholder="Type your answer"
          onChange={(e) => setUserAnswer(e.target.value)}
          className="p-1 text-sm mb-2 border-gray-300 rounded-md focus:ring-0"
          whileFocus={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      <motion.button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        Submit Answer
      </motion.button>
    </motion.div>
  );
};

export default QuestionDisplay;
