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
      [a, b] = [b, a];
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

    if (operator === "-") {
      const n1 = random(1, 100);
      const n2 = random(1, 100);
      a = Math.max(n1, n2);
      b = Math.min(n1, n2);
    }

    if (operator === "÷") {
      const result = random(1, 12);
      b = random(1, 12);
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

  const type = random(1, 3);

  if (type === 1) {
    const base = random(2, 12);

    return {
      difficulty,
      expression: `${base}²`,
      answer: base * base,
    };
  }

  if (type === 2) {
    const root = random(2, 15);

    return {
      difficulty,
      expression: `√${root * root}`,
      answer: root,
    };
  }

  const a = random(1, 50);
  const b = random(1, 12);
  const c = random(1, 12);

  return {
    difficulty,
    expression: `${a}+${b}×${c}`,
    answer: a + b * c,
  };
}

export function getDifficultyByClassicLevel(level: number): Difficulty {
  if (level === 1) return "facil";
  if (level === 2) return "medio";
  return "dificil";
}