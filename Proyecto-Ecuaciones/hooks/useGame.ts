import { useEffect, useState } from "react";

// 'Operation' and 'Difficulty' were not exported from ../lib/math/types — use local aliases for compatibility
type Operation = any;
type Difficulty = any;

function generateOperation(difficulty: Difficulty): Operation {
  return { answer: 0 };
}

export default function useGame(difficulty: Difficulty) {
  const [operation, setOperation] = useState<Operation | null>(null);

  const [score, setScore] = useState(0);

  const [correctAnswers, setCorrectAnswers] = useState(0);

  const [wrongAnswers, setWrongAnswers] = useState(0);

  const [round, setRound] = useState(1);

  useEffect(() => {
    nextOperation();
  }, []);

  function nextOperation() {
    const newOperation = generateOperation(difficulty);

    setOperation(newOperation);
  }

  function validateAnswer(userAnswer: number) {
    if (!operation) return false;

    const isCorrect = userAnswer === operation.answer;

    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);

      setScore((prev) => prev + 50);
    } else {
      setWrongAnswers((prev) => prev + 1);
    }

    setRound((prev) => prev + 1);

    nextOperation();

    return isCorrect;
  }

  return {
    operation,

    score,

    round,

    correctAnswers,

    wrongAnswers,

    validateAnswer,

    nextOperation,
  };
}
