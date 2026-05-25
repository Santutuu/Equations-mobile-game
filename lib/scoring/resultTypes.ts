export type GameMode = "classic" | "true-false" | "multiple-choice" | "timed";

export type GameResult = {
  id: string;
  mode: GameMode;

  score: number;

  correctAnswers: number;
  wrongAnswers: number;
  averageTime: number;

  levelReached: number;
  finishedGame: boolean;

  date: string;
};