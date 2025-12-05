import type { Question } from "./types";

export function calculateScore(questions: Question[], answers: number[]): number {
  return questions.reduce((score, q, i) => score + (answers[i] === q.correctIndex ? 1 : 0), 0);
}
