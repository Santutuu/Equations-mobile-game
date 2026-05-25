export type TrueFalseOperation = {
  left: number;
  right: number;
  operator: "+";
  realResult: number;
  shownResult: number;
  isTrue: boolean;
  text: string;
};

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateTrueFalseOperation(): TrueFalseOperation {
  const left = randomBetween(1, 50);
  const right = randomBetween(1, 50);

  const realResult = left + right;
  const isTrue = Math.random() < 0.5;

  let shownResult = realResult;

  if (!isTrue) {
    const offset = randomBetween(1, 10);
    const sign = Math.random() < 0.5 ? -1 : 1;

    shownResult = realResult + offset * sign;

    if (shownResult < 0 || shownResult === realResult) {
      shownResult = realResult + offset;
    }
  }

  return {
    left,
    right,
    operator: "+",
    realResult,
    shownResult,
    isTrue,
    text: `${left}+${right}=${shownResult}`,
  };
}