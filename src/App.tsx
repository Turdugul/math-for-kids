import { useState } from "react";
import MathQuiz from "./components/MathQuiz";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [selectedOperation, setSelectedOperation] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState("easy");

  return (
    <div className="min-h-screen p-4 flex items-center justify-center bg-gray-100">
      <motion.div
        className="container mx-auto flex flex-col items-center justify-center bg-slate-100 border-4 border-gray-900 shadow-2xl rounded-xl p-8 md:w-3/5"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl font-bold text-blue-500 mb-8 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Math Skills for Kids
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 text-center mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Choose difficulty
        </motion.p>

        <motion.div
          className="grid grid-cols-3 gap-1 text-lg mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {["easy", "medium", "hard"].map((level) => (
            <motion.button
              key={level}
              onClick={() => setDifficulty(level)}
              className={`p-2 text-base md:p-4 text-white rounded-full shadow-lg transition duration-300 ${
                difficulty === level
                  ? level === "easy"
                    ? "bg-green-500"
                    : level === "medium"
                    ? "bg-yellow-500"
                    : "bg-red-500"
                  : "bg-gray-400 hover:bg-opacity-80"
              }`}
              whileHover={{ scale: 1.1 }}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {["+", "-", "*", "/"].map((op) => (
            <motion.button
              key={op}
              onClick={() => setSelectedOperation(op)}
              className={`p-3 md:p-5 text-white rounded-lg shadow-lg hover:scale-105 transition duration-300 ${
                op === "+"
                  ? "bg-green-500 hover:bg-green-600"
                  : op === "-"
                  ? "bg-red-500 hover:bg-red-600"
                  : op === "*"
                  ? "bg-yellow-500 hover:bg-yellow-600"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {op === "+" ? "Add +" : op === "-" ? "Subtract -" : op === "*" ? "Multiply *" : "Divide /"}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {!selectedOperation ? (
            <motion.p
              className="text-lg text-gray-700 text-center"
              key="select-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              Select an operation to start the quiz!
            </motion.p>
          ) : (
            <MathQuiz key={selectedOperation} operation={selectedOperation} difficulty={difficulty} />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default App;
