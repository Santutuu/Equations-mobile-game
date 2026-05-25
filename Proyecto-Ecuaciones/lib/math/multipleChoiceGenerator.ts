export type MultipleChoiceOperation = {
  left: number;
  right: number;
  operator: "+";
  result: number;
  text: string;
  options: number[];
};

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array: number[]) {
  return [...array].sort(() => Math.random() - 0.5);
}

export function generateMultipleChoiceOperation(): MultipleChoiceOperation {
  const left = randomBetween(1, 50);
  const right = randomBetween(1, 50);
  const result = left + right;

  const options = new Set<number>();
  options.add(result);

  while (options.size < 4) {
    const wrong = result + randomBetween(-10, 10);

    if (wrong >= 0 && wrong !== result) {
      options.add(wrong);
    }
  }

  return {
    left,
    right,
    operator: "+",
    result,
    text: `${left}+${right}`,
    options: shuffle(Array.from(options)),
  };
}