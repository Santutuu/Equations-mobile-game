import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

import {
  generateOperation,
  getDifficultyByClassicLevel,
} from "@/lib/math/generator";
import { Operation } from "@/lib/math/types";
import useNumericInput from "./useNumericInput";

const MAX_ROUNDS = 1;
const MAX_LEVEL = 3;
const POINTS_PER_ROUND = 100;

export default function useClassicGame(level: number) {
  const router = useRouter();

  const [operation, setOperation] = useState<Operation>(() =>
    generateOperation(getDifficultyByClassicLevel(level))
  );

  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);

  const { answer, pressNumber, deleteLast, clear } = useNumericInput();

  useEffect(() => {
    const difficulty = getDifficultyByClassicLevel(level);

    setOperation(generateOperation(difficulty));
    setRound(1);
    clear();
  }, [level]);

  function submitAnswer() {
    if (answer === "") return;

    const isCorrect = Number(answer) === operation.answer;

    if (!isCorrect) {
      router.replace("/game/result-lose");
      return;
    }

    const newScore = score + POINTS_PER_ROUND;
    setScore(newScore);

    if (round >= MAX_ROUNDS) {
      const finishedGame = level >= MAX_LEVEL;
      const nextLevel = level + 1;

      router.replace({
        pathname: "/game/result-win",
        params: {
          nextLevel: String(nextLevel),
          finishedGame: String(finishedGame),
        },
      });

      return;
    }

    const difficulty = getDifficultyByClassicLevel(level);

    setRound((prev) => prev + 1);
    setOperation(generateOperation(difficulty));
    clear();
  }

  return {
    operation,
    answer,
    score,
    round,
    maxRounds: MAX_ROUNDS,
    level,
    pressNumber,
    deleteLast,
    submitAnswer,
  };
}