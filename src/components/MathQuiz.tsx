// import React, { useEffect, useCallback } from "react";
// import { useQuiz } from "./useQuiz";
// import { generateQuestion } from "./generateQuestion";
// import QuestionDisplay from "./Question";
// import QuizResult from "./QuizResult";

// const MathQuiz = ({ operation }: { operation: string }) => {
//   const [state, dispatch] = useQuiz();
//   const [message, setMessage] = React.useState<string>("");

  
//   const generateNewQuestion = useCallback(() => {
//     const { question, answer } = generateQuestion(operation);
//     dispatch({ type: "GENERATE_QUESTION", question, answer });
//     setMessage(""); // Clear message on new question
//   }, [operation, dispatch]); 

//   useEffect(() => {
//     generateNewQuestion();
//   }, [operation, generateNewQuestion]); 

//   const handleSubmit = () => {
//     const isCorrect = Number(state.userAnswer) === state.answer;
//     dispatch({ type: "SUBMIT_ANSWER", isCorrect });

//     if (isCorrect && !state.isComplete) {
//       setMessage("Correct! Great job!");
//       generateNewQuestion();
//     } else if (!isCorrect) {
//       setMessage("Oops! Try again.");
//     }
//   };

//   const handleRestart = () => {
//     dispatch({ type: "RESET" });
//     generateNewQuestion();
//   };

//   // Explicitly typing `value` as string
//   const setUserAnswer = (value: string) => {
//     dispatch({ type: "SET_USER_ANSWER", userAnswer: value });
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <h2 className="text-3xl font-bold text-purple-500 mb-1">{operation} Quiz</h2>
//       {state.isComplete ? (
//         <QuizResult handleRestart={handleRestart} />
//       ) : (
//         <>
//           <QuestionDisplay
//             question={state.question}
//             userAnswer={state.userAnswer}
//             setUserAnswer={setUserAnswer}
//             handleSubmit={handleSubmit}
//           />
//           <div className="mt-2 text-red-500">
//             <p>{message}</p> {/* Message displayed here */}
//           </div>
//           <div className="mt-4 text-gray-700">
//             Correct Answers: {state.correctCount} / 5
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default MathQuiz;
import React, { useEffect, useCallback } from "react";
import { useQuiz } from "./useQuiz";
import { generateQuestion } from "./generateQuestion";
import QuestionDisplay from "./Question";
import QuizResult from "./QuizResult";

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

  // Explicitly typing `value` as string
  const setUserAnswer = (value: string) => {
    dispatch({ type: "SET_USER_ANSWER", userAnswer: value });
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold text-purple-500 mb-1"> Quiz {operation}</h2>
      {state.isComplete ? (
        <QuizResult handleRestart={handleRestart} />
      ) : (
        <>
          <QuestionDisplay
            question={state.question}
            userAnswer={state.userAnswer}
            setUserAnswer={setUserAnswer}
            handleSubmit={handleSubmit}
          />
          <div className=" text-red-500">
            <p>{message}</p> {/* Message displayed here */}
          </div>
          <div className="mt-2 text-gray-700">
            Correct Answers: {state.correctCount} / 10
          </div>
        </>
      )}
    </div>
  );
};

export default MathQuiz;
