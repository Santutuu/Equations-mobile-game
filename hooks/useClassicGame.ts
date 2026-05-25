import { useEffect } from "react";

import useGame from "@/hooks/useGame";
import useNumericInput from "@/hooks/useNumericInput";
import { calculateScore } from "@/lib/scoring/calcularScore";

type UseClassicGameParams = {
  level: number;
  restartKey?: string;

  accumulatedScore?: number;
  accumulatedCorrectAnswers?: number;
  accumulatedWrongAnswers?: number;
  accumulatedResponseTime?: number;
};

export default function useClassicGame({
  level,
  restartKey = "",
  accumulatedScore = 0,
  accumulatedCorrectAnswers = 0,
  accumulatedWrongAnswers = 0,
  accumulatedResponseTime = 0,
}: UseClassicGameParams) {
  const game = useGame({
    level,
    restartKey,
    maxRounds: 10,
    questionTime: 15,
    mode: "classic",

    accumulatedScore,
    accumulatedCorrectAnswers,
    accumulatedWrongAnswers,
    accumulatedResponseTime,
  });

  const { answer, pressNumber, deleteLast, clear } = useNumericInput();

  useEffect(() => {
    if (!game.isActive) return;

    if (game.secondsLeft === 0) {
      const points = calculateScore({
        isCorrect: false,
        isTimeout: true,
        secondsLeft: game.secondsLeft,
        questionTime: game.questionTime,
      });

      clear();
      game.finishQuestion(points, false, game.questionTime);
    }
  }, [game.secondsLeft, game.isActive]);

  function submitAnswer() {
    if (!game.isActive) return;
    if (answer === "") return;

    const isCorrect = Number(answer) === game.operation.answer;
    const responseTime = game.questionTime - game.secondsLeft;

    const points = calculateScore({
      isCorrect,
      isTimeout: false,
      secondsLeft: game.secondsLeft,
      questionTime: game.questionTime,
    });

    clear();
    game.finishQuestion(points, isCorrect, responseTime);
  }

  return {
    operation: game.operation,
    answer,
    score: game.score,
    round: game.round,
    maxRounds: game.maxRounds,
    level: game.level,
    secondsLeft: game.secondsLeft,

    pressNumber,
    deleteLast,
    submitAnswer,
  };
}