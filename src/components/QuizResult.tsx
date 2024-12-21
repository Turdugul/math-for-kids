import React from "react";

interface QuizResultProps {
  handleRestart: () => void;  
}

const QuizResult: React.FC<QuizResultProps> = ({ handleRestart }) => {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold text-green-500 mb-4">
      You're a star! Keep shining!
      </h3>
      <button
        onClick={handleRestart} 
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Restart
      </button>
    </div>
  );
};

export default QuizResult;
