// Utility: generateQuestion.ts
export const generateQuestion = (operation: string) => {
    let num1: number, num2: number;
    let questionText = "";
    let correctAnswer = 0;
  
    switch (operation) {
      case "+":
        num1 = Math.floor(Math.random() * 99) + 1;
        num2 = Math.floor(Math.random() * (100 - num1)) + 1;
        questionText = `${num1} + ${num2}`;
        correctAnswer = num1 + num2;
        break;
  
      case "-":
        num1 = Math.floor(Math.random() * 99) + 1;
        num2 = Math.floor(Math.random() * num1) + 1;
        questionText = `${num1} - ${num2}`;
        correctAnswer = num1 - num2;
        break;
  
      case "*":
        do {
          num1 = Math.floor(Math.random() * 99) + 1;
          num2 = Math.floor(Math.random() * 99) + 1;
        } while (num1 * num2 >= 100);
        questionText = `${num1} * ${num2}`;
        correctAnswer = num1 * num2;
        break;
  
      case "/":
        do {
          // Randomly choose num2 between 1 and 99
          num2 = Math.floor(Math.random() * 99) + 1;
          
          // Randomly choose a multiplier for num2 to get num1, ensuring num1 is a multiple of num2
          // and that num1 is less than 100
          num1 = num2 * (Math.floor(Math.random() * (99 / num2)) + 1);
          
      // Ensure num1 is not equal to num2 and num1 is less than 100
      } while (num1 >= 100 || num1 === num2);
  
      questionText = `${num1} / ${num2}`;
      correctAnswer = num1 / num2;
        break;
  
      default:
        break;
    }
  
    return { question: questionText, answer: correctAnswer };
  };
  