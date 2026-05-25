import { useRouter } from "expo-router";
import { useState } from "react";

import { generateOperation } from "@/lib/math/generator";
import { Difficulty, Operation } from "@/lib/math/types";

import useNumericInput from "./useNumericInput";

const MAX_ROUNDS = 10;

export default function useClassicGame(
  difficulty: Difficulty
) {
  const router = useRouter();

  const [operation, setOperation] =
    useState<Operation>(() =>
      generateOperation(difficulty)
    );

  const [round, setRound] = useState(1);

  const [score, setScore] =
    useState(0);

  const {
    answer,
    pressNumber,
    deleteLast,
    clear,
  } = useNumericInput();

  function submitAnswer() {
    if (answer === "") return;

    const numericAnswer =
      Number(answer);

    const isCorrect =
      numericAnswer === operation.answer;

    if (!isCorrect) {
      router.replace(
        "/game/result-lose"
      );

      return;
    }

    if (round >= MAX_ROUNDS) {
      router.replace(
        "/game/result-win"
      );

      return;
    }

    setScore(
      prev => prev + 100
    );

    setRound(
      prev => prev + 1
    );

    setOperation(
      generateOperation(
        difficulty
      )
    );

    clear();
  }

  return {
    operation,

    answer,

    score,

    round,

    maxRounds:
      MAX_ROUNDS,

    pressNumber,

    deleteLast,

    submitAnswer,
  };
}