/*
Implementa la funciona de puntuacion para ej juego
*/

export function computeScore({
  correct,
  timeTaken,
  maxTime,
}: {
  correct: boolean;
  timeTaken: number;
  maxTime: number;
}) {
  if (!correct) return -30;
  const fastThreshold = maxTime * 0.75;
  if (timeTaken <= fastThreshold) return 100;
  return 70;
}
