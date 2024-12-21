import { useReducer } from "react";

// Define the state type
interface State {
  question: string;
  answer: number;
  userAnswer: string;
  correctCount: number;
  isComplete: boolean;
}

// Define action types
type Action =
  | { type: "GENERATE_QUESTION"; question: string; answer: number }
  | { type: "SUBMIT_ANSWER"; isCorrect: boolean }
  | { type: "SET_USER_ANSWER"; userAnswer: string }
  | { type: "RESET" };

// Initial state
const initialState: State = {
  question: "",
  answer: 0,
  userAnswer: "",
  correctCount: 0,
  isComplete: false,
};

// Reducer function with typed state and action
const quizReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "GENERATE_QUESTION":
      return {
        ...state,
        question: action.question,
        answer: action.answer,
        userAnswer: "",
      };
    case "SUBMIT_ANSWER":{
        if (!action.isCorrect) return state;
        const updatedCorrectCount: number = state.correctCount + 1;
        return {
          ...state,
          correctCount: updatedCorrectCount,
          isComplete: updatedCorrectCount >= 10,
        };
      };
    case "SET_USER_ANSWER":
      return {
        ...state,
        userAnswer: action.userAnswer,
      };
    case "RESET":
      return { ...initialState };
    default:
      return state;
  }
};

// Custom hook to use the reducer
export const useQuiz = (): [State, React.Dispatch<Action>] => {
  return useReducer(quizReducer, initialState);
};
