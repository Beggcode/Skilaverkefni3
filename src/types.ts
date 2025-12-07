// Type definition for a quiz question
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
}
