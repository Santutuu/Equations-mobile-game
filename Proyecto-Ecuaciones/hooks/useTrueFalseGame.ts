import { useState } from "react";
import { router } from "expo-router";

import {
  generateTrueFalseOperation,
  TrueFalseOperation,
} from "@/lib/math/trueFalseGenerator";

const MAX_ROUNDS = 10;
const POINTS_PER_ROUND = 100;

export default function useTrueFalseGame() {
  const [operation, setOperation] = useState<TrueFalseOperation>(
    generateTrueFalseOperation()
  );

  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);

  function answer(userAnswer: boolean) {
    const isCorrect = userAnswer === operation.isTrue;

    if (!isCorrect) {
      

      router.replace("/game/result-lose");
      return;
    }

    const newScore = score + POINTS_PER_ROUND;

    if (round >= MAX_ROUNDS) {
      

      router.replace("/game/result-lose");
      return;
    }

    setScore(newScore);
    setRound(round + 1);
    setOperation(generateTrueFalseOperation());
  }

  return {
    operation,
    score,
    round,
    maxRounds: MAX_ROUNDS,
    answer,
  };
}