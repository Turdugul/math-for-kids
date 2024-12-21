import React from "react";

interface QuestionDisplayProps {
  question: string;
  userAnswer: string;
  setUserAnswer: (value: string) => void;
  handleSubmit: () => void;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ question, userAnswer, setUserAnswer, handleSubmit }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col sm:flex-row gap-3 p-4">
      <div className="text-xl mb-4 ">{question} = </div>
      <input
        type="number"
        value={userAnswer}
        placeholder="type your answer"
        onChange={(e) => setUserAnswer(e.target.value)}
       className="p-1 text-sm mb-2 border-gray-300 rounded-md focus:ring-0"
      /> 
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Submit Answer
      </button>
    </div>
  );
};

export default QuestionDisplay;
