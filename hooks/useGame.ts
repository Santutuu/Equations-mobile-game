import { useIsFocused } from "@react-navigation/native";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";

import {
  generateOperation,
  getDifficultyByClassicLevel,
} from "@/lib/math/generator";
import { Operation } from "@/lib/math/types";
import { saveGameResult } from "@/lib/storage/gameResultStorage";

const MAX_LEVEL = 3;
const PASSING_SCORE = 700;

type UseGameParams = {
  level: number;
  restartKey?: string;
  maxRounds?: number;
  questionTime?: number;
  accumulatedScore?: number;
  accumulatedCorrectAnswers?: number;
  accumulatedWrongAnswers?: number;
  accumulatedResponseTime?: number;
  mode?: "classic" | "multiple-choice" | "true-false" | "timed";
};

export default function useGame({
  level,
  restartKey = "",
  maxRounds = 10,
  questionTime = 15,
  accumulatedScore = 0,
  accumulatedCorrectAnswers = 0,
  accumulatedWrongAnswers = 0,
  accumulatedResponseTime = 0,
  mode = "classic",
}: UseGameParams) {
  const router = useRouter();
  const isFocused = useIsFocused();

  const hasFinishedRef = useRef(false);

  const difficulty = getDifficultyByClassicLevel(level);

  const [operation, setOperation] = useState<Operation>(() =>
    generateOperation(difficulty),
  );

  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(questionTime);

  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [totalResponseTime, setTotalResponseTime] = useState(0);

  const resetGame = useCallback(() => {
    hasFinishedRef.current = false;

    setOperation(generateOperation(difficulty));
    setRound(1);
    setScore(0);
    setSecondsLeft(questionTime);
    setCorrectAnswers(0);
    setWrongAnswers(0);
    setTotalResponseTime(0);
  }, [difficulty, questionTime, restartKey]);

  useFocusEffect(
    useCallback(() => {
      resetGame();

      return () => {
        hasFinishedRef.current = true;
      };
    }, [resetGame]),
  );

  useEffect(() => {
    if (!isFocused || hasFinishedRef.current) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) return 0;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isFocused, operation]);

  function goToNextQuestion() {
    setOperation(generateOperation(difficulty));
    setSecondsLeft(questionTime);
  }

  async function finishQuestion(
    points: number,
    isCorrect: boolean,
    responseTime: number,
  ) {
    if (!isFocused || hasFinishedRef.current) return;

    const newLevelScore = score + points;
    const newLevelCorrect = correctAnswers + (isCorrect ? 1 : 0);
    const newLevelWrong = wrongAnswers + (isCorrect ? 0 : 1);
    const newLevelResponseTime = totalResponseTime + responseTime;

    setScore(newLevelScore);
    setCorrectAnswers(newLevelCorrect);
    setWrongAnswers(newLevelWrong);
    setTotalResponseTime(newLevelResponseTime);

    if (round >= maxRounds) {
      hasFinishedRef.current = true;

      const passedLevel = newLevelScore >= PASSING_SCORE;

      const totalScore = passedLevel
        ? accumulatedScore + newLevelScore
        : newLevelScore;

      const totalCorrect = passedLevel
        ? accumulatedCorrectAnswers + newLevelCorrect
        : newLevelCorrect;

      const totalWrong = passedLevel
        ? accumulatedWrongAnswers + newLevelWrong
        : newLevelWrong;

      const totalTime = passedLevel
        ? accumulatedResponseTime + newLevelResponseTime
        : newLevelResponseTime;

      const totalAnswers = totalCorrect + totalWrong;
      const averageTime = totalAnswers > 0 ? totalTime / totalAnswers : 0;

      const finishedGame = level >= MAX_LEVEL;
      const nextLevel = level + 1;

      await saveGameResult({
        id: Date.now().toString(),
        mode,
        score: totalScore,
        correctAnswers: totalCorrect,
        wrongAnswers: totalWrong,
        averageTime,
        levelReached: level,
        finishedGame,
        date: new Date().toISOString(),
      });

      router.replace({
        pathname: passedLevel ? "/game/result-win" : "/game/result-lose",
        params: {
          level: String(level),
          nextLevel: String(nextLevel),
          finishedGame: String(finishedGame),
          score: String(totalScore),
          correctAnswers: String(totalCorrect),
          wrongAnswers: String(totalWrong),
          averageTime: averageTime.toFixed(1),
          accumulatedScore: String(totalScore),
          accumulatedCorrectAnswers: String(totalCorrect),
          accumulatedWrongAnswers: String(totalWrong),
          accumulatedResponseTime: String(totalTime),
        },
      });

      return;
    }

    setRound((prev) => prev + 1);
    goToNextQuestion();
  }

  return {
    operation,
    score,
    round,
    maxRounds,
    level,
    secondsLeft,
    questionTime,
    isActive: isFocused && !hasFinishedRef.current,
    finishQuestion,
  };
}
