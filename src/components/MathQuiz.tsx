
import React, { useEffect, useCallback } from "react";
import { useQuiz } from "./useQuiz";
import { generateQuestion } from "./generateQuestion";
import QuestionDisplay from "./Question";
import QuizResult from "./QuizResult";
import { motion } from "framer-motion";

const MathQuiz = ({ operation, difficulty }: { operation: string; difficulty: string }) => {
  const [state, dispatch] = useQuiz();
  const [message, setMessage] = React.useState<string>("");

  const generateNewQuestion = useCallback(() => {
    const { question, answer } = generateQuestion(operation, difficulty);
    dispatch({ type: "GENERATE_QUESTION", question, answer });
    setMessage(""); // Clear message on new question
  }, [operation, difficulty, dispatch]);

  useEffect(() => {
    generateNewQuestion();
  }, [operation, difficulty, generateNewQuestion]);

  const handleSubmit = () => {
    const isCorrect = Number(state.userAnswer) === state.answer;
    dispatch({ type: "SUBMIT_ANSWER", isCorrect });

    if (isCorrect && !state.isComplete) {
      setMessage("Correct! Great job!");
      generateNewQuestion();
    } else if (!isCorrect) {
      setMessage("Oops! Try again.");
    }
  };

  const handleRestart = () => {
    dispatch({ type: "RESET" });
    generateNewQuestion();
  };

 
  const setUserAnswer = (value: string) => {
    dispatch({ type: "SET_USER_ANSWER", userAnswer: value });
  };

  return (
    <motion.div 
      className="flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-purple-500 mb-1">{operation} Quiz</h2>
      {state.isComplete ? (
        <QuizResult handleRestart={handleRestart} />
      ) : (
        <>
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <QuestionDisplay
              question={state.question}
              userAnswer={state.userAnswer}
              setUserAnswer={setUserAnswer}
              handleSubmit={handleSubmit}
            />
          </motion.div>
          <motion.div 
            className="mt-2 text-red-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p>{message}</p> {/* Message displayed here */}
          </motion.div>
          <motion.div 
            className="mt-4 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            Correct Answers: {state.correctCount} / 10
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default MathQuiz;