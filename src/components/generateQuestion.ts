
export const generateQuestion = (operation: string, difficulty: string) => {
  let num1: number, num2: number;
  let questionText = "";
  let correctAnswer = 0;
  
  // Define difficulty ranges
  const maxNum = difficulty === "easy" ? 15 : difficulty === "medium" ? 50 : 99;

  switch (operation) {
    case "+":
      num1 = Math.floor(Math.random() * maxNum) + 1;
      num2 = Math.floor(Math.random() * (maxNum - num1)) + 1;
      questionText = `${num1} + ${num2}`;
      correctAnswer = num1 + num2;
      break;

    case "-":
      num1 = Math.floor(Math.random() * maxNum) + 1;
      num2 = Math.floor(Math.random() * num1) + 1;
      questionText = `${num1} - ${num2}`;
      correctAnswer = num1 - num2;
      break;

    case "*":
      do {
        num1 = Math.floor(Math.random() * maxNum) + 1;
        num2 = Math.floor(Math.random() * maxNum) + 1;
      } while (num1 * num2 >= maxNum * maxNum);
      questionText = `${num1} * ${num2}`;
      correctAnswer = num1 * num2;
      break;

    case "/":
      do {
        num2 = Math.floor(Math.random() * maxNum) + 1;
        num1 = num2 * (Math.floor(Math.random() * (maxNum / num2)) + 1);
      } while (num1 >= maxNum * maxNum || num1 === num2);

      questionText = `${num1} / ${num2}`;
      correctAnswer = num1 / num2;
      break;

    default:
      break;
  }

  return { question: questionText, answer: correctAnswer };
};
