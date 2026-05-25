export type CompareOperation = {
  leftText: string;
  rightText: string;
  leftResult: number;
  rightResult: number;
  correctAnswer: ">" | "<" | "=";
};

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateSimpleOperation() {
  const left = randomBetween(1, 50);
  const right = randomBetween(1, 50);

  return {
    text: `${left}+${right}`,
    result: left + right,
  };
}

export function generateCompareOperation(): CompareOperation {
  const leftOperation = generateSimpleOperation();
  const rightOperation = generateSimpleOperation();

  let correctAnswer: ">" | "<" | "=" = "=";

  if (leftOperation.result > rightOperation.result) {
    correctAnswer = ">";
  } else if (leftOperation.result < rightOperation.result) {
    correctAnswer = "<";
  }

  return {
    leftText: leftOperation.text,
    rightText: rightOperation.text,
    leftResult: leftOperation.result,
    rightResult: rightOperation.result,
    correctAnswer,
  };
}