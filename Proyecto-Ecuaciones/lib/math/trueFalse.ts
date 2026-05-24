type Operation = {
  expression: string;
  answer: number;
};

export function generateTrueFalse(operation: Operation) {
  const shouldBeTrue = Math.random() > 0.5;

  if (shouldBeTrue) {
    return {
      expression: `${operation.expression} = ${operation.answer}`,
      isCorrect: true,
    };
  }

  const fakeAnswer = operation.answer + Math.floor(Math.random() * 10) + 1;

  return {
    expression: `${operation.expression} = ${fakeAnswer}`,
    isCorrect: false,
  };
}
