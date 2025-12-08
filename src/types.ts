// Types for a quiz question
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
}
