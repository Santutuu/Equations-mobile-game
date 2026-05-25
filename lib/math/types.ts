export type Difficulty = "facil" | "medio" | "dificil";

export type Operation = {
  expression: string;
  answer: number;
  difficulty: Difficulty;
};