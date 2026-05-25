type CalculateScoreParams = {
  isCorrect: boolean;
  isTimeout: boolean;
  secondsLeft: number;
  questionTime: number;
};

export function calculateScore({
  isCorrect,
  isTimeout,
  secondsLeft,
  questionTime,
}: CalculateScoreParams) {
  if (isTimeout) return -50;

  if (!isCorrect) return -30;

  const elapsedTime = questionTime - secondsLeft;
  const fastLimit = questionTime * 0.75;

  if (elapsedTime < fastLimit) return 100;

  return 70;
}