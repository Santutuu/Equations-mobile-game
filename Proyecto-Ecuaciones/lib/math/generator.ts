

/*
Genera una operación matemática basada en la dificultad seleccionada. 
*/

type Difficulty = "facil" | "medio" | "dificil";

interface Operation {
  difficulty: Difficulty;
  expression: string;
  answer: number;
}

const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export function generateOperation(difficulty: Difficulty): Operation {
  if (difficulty === "facil") {
    const a = random(1, 100);
    const b = random(1, 100);
    const operator = Math.random() > 0.5 ? "+" : "-";

    return {
      difficulty,
      expression: `${a} ${operator} ${b}`,
      answer: operator === "+" ? a + b : a - b,
    };
  }

  if (difficulty === "medio") {
    const operators = ["+", "-", "×", "÷"];
    const operator = operators[random(0, operators.length - 1)];

    let a = random(1, 100);
    let b = random(1, 100);

    if (operator === "÷") {
      b = random(1, 12);
      const result = random(1, 12);
      a = b * result; // división exacta
    }

    return {
      difficulty,
      expression: `${a} ${operator} ${b}`,
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

  // difícil
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
  const b = random(1, 50);
  const c = random(2, 10);

  return {
    difficulty,
    expression: `${a} + ${b} × ${c}`,
    answer: a + b * c,
  };
}