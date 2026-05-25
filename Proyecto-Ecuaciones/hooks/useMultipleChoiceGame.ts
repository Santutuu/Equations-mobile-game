import { router } from "expo-router";
import { useState } from "react";

import {
  generateMultipleChoiceOperation,
  MultipleChoiceOperation,
} from "@/lib/math/multipleChoiceGenerator";

const MAX_ROUNDS = 10;
const POINTS_PER_ROUND = 100;

export default function useMultipleChoiceGame() {
  const [operation, setOperation] = useState<MultipleChoiceOperation>(
    generateMultipleChoiceOperation()
  );

  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);

  function answer(selectedAnswer: number) {
    const isCorrect = selectedAnswer === operation.result;

    if (!isCorrect) {
      router.replace("/game/result-lose");
      return;
    }

    const newScore = score + POINTS_PER_ROUND;

    if (round >= MAX_ROUNDS) {
      router.replace("/game/result-win");
      return;
    }

    setScore(newScore);
    setRound(round + 1);
    setOperation(generateMultipleChoiceOperation());
  }

  return {
    operation,
    score,
    round,
    maxRounds: MAX_ROUNDS,
    answer,
  };
}