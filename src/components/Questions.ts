import type { Question } from "../types"

export const questions: Question[] = [
  {
    id: 1,
    question: "Hvað heitir höfuðborg Íslands?",
    options: ["Akureyri", "Reykjavík", "Keflavík", "Selfoss"],
    correctIndex: 1,
  },
  {
    id: 2,
    question: "Hvað er 2 + 2?",
    options: ["3", "4", "5", "22"],
    correctIndex: 1,
  },
  {
    id: 3,
    question: "Hvaða tungumál er mest notað í heiminum?",
    options: ["Enska", "Mandarín", "Spænska", "Hindi"],
    correctIndex: 1,
  },
  // Bæta við fleiri spurningum hér ef þú vilt
]