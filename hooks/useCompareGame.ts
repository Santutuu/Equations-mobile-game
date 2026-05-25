import { router } from "expo-router";
import { useState } from "react";

import {
    CompareOperation,
    generateCompareOperation,
} from "@/lib/math/compareGenerator";

const MAX_ROUNDS = 10;
const POINTS_PER_ROUND = 100;

export default function useCompareGame() {
  const [operation, setOperation] = useState<CompareOperation>(
    generateCompareOperation(),
  );

  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);

  function answer(selectedAnswer: ">" | "<" | "=") {
    const isCorrect = selectedAnswer === operation.correctAnswer;

    if (!isCorrect) {
      router.replace({
        pathname: "/game/result-lose",
        params: {
          score,
          round,
          result: "lose",
        },
      });

      return;
    }

    const newScore = score + POINTS_PER_ROUND;

    if (round >= MAX_ROUNDS) {
      router.replace({
        pathname: "/game/result-win",
        params: {
          score: newScore,
          round,
          result: "win",
        },
      });

      return;
    }

    setScore(newScore);
    setRound(round + 1);
    setOperation(generateCompareOperation());
  }

  return {
    operation,
    score,
    round,
    maxRounds: MAX_ROUNDS,
    answer,
  };
}
