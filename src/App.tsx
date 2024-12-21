import { useState } from "react";
import MathQuiz from "./components/MathQuiz";

const App = () => {
  const [selectedOperation, setSelectedOperation] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState("easy");

  return (
    <div className="min-h-screen p-4 flex items-center justify-center bg-gray-100">
      <div className="container mx-auto flex flex-col items-center justify-center bg-slate-100 border-4 border-gray-900 shadow-2xl rounded-xl p-8 md:w-3/5">
        <h1 className="text-4xl font-bold text-blue-500 mb-8 text-center">
          Math Skills for Kids
        </h1>
        <p className="text-lg  text-gray-700 text-center mb-2">
          Choose difficulty
        </p>
        <div className="grid grid-cols-3 gap-1 text-lg mb-3">
          <button
            onClick={() => setDifficulty("easy")}
            className={`p-2  text-base md:p5 md:p-4 text-white rounded-full shadow-lg transition duration-300 ${difficulty === "easy" ? "bg-green-500" : "bg-gray-400 hover:bg-green-500"}`}
          >
            Easy
          </button>
          <button
            onClick={() => setDifficulty("medium")}
            className={`p-2  text-base md:p-4 text-white rounded-full shadow-lg transition duration-300 ${difficulty === "medium" ? "bg-yellow-500" : "bg-gray-400 hover:bg-yellow-500"}`}
          >
            Medium
          </button>
          <button
            onClick={() => setDifficulty("hard")}
            className={`p-2  text-base md:p-4 text-white rounded-full  shadow-lg transition duration-300 ${difficulty === "hard" ? "bg-red-500" : "bg-gray-400 hover:bg-red-500"}`}
          >
            Hard
          </button>
        </div>

        {/* Navigation Bar */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xl">
          <button
            onClick={() => setSelectedOperation("+")}
            className="p-3 md:p5 bg-green-500 text-white text-base  rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
          >
            Add +
          </button>
          <button
            onClick={() => setSelectedOperation("-")}
            className="p-3 md:p5 bg-red-500 text-white rounded-lg text-center text-base shadow-lg hover:bg-red-600 transition duration-300 "
          >
            Subtract -
          </button>
          <button
            onClick={() => setSelectedOperation("*")}
            className="p-3 md:p5 bg-yellow-500 text-white text-center text-base  rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
          >
            Multiply *
          </button>
          <button
            onClick={() => setSelectedOperation("/")}
            className=" p-3 md:p5  bg-blue-500 text-white text-center text-base rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 "
          >
            Divide /
          </button>
        </div>

        {/* Show quiz or navigation */}
        {!selectedOperation ? (
          <p className="text-lg text-gray-700 text-center">Select an operation to start the quiz!</p>
        ) : (
          <MathQuiz operation={selectedOperation} difficulty={difficulty}/>
        )}
      </div>
    </div>
  );
};

export default App;
