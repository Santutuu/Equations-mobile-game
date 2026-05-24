import { Difficulty, Operation } from "./types";

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateOperation(difficulty: Difficulty): Operation {
  if (difficulty === "facil") {
  let a = random(1, 100);
  let b = random(1, 100);
  const operator = Math.random() > 0.5 ? "+" : "-";

  if (operator === "-" && b > a) {
    const temp = a;
    a = b;
    b = temp;
  }

  return {
    difficulty,
    expression: `${a}${operator}${b}`,
    answer: operator === "+" ? a + b : a - b,
  };
}

  if (difficulty === "medio") {
    const operators = ["+", "-", "×", "÷"];
    const operator = operators[random(0, operators.length - 1)];

    let a = random(1, 100);
    let b = random(1, 12);

    if (operator === "÷") {
      const result = random(1, 12);
      a = b * result;
    }

    return {
      difficulty,
      expression: `${a}${operator}${b}`,
      answer:
        operator === "+"
          ? a + b
          : operator === "-"
          ? a - b
          : operator === "×"
          ? a * b
          : a / b,
    };
  }

  const base = random(2, 12);

  return {
    difficulty,
    expression: `${base}²`,
    answer: base * base,
  };
}