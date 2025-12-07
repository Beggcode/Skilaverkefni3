// logic for displaying a question and its possible answers
import { useState } from "react";
import type { Question } from "../types";

interface Props {
  question: Question;
  onAnswer: (answerIndex: number) => void;
}

export default function QuestionComponent({ question, onAnswer }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showCorrect, setShowCorrect] = useState(false);

  const handleClick = (index: number) => {
    if (selectedIndex !== null) return;
    setSelectedIndex(index);
    setShowCorrect(true);

    setTimeout(() => {
      onAnswer(index);
    }, 450);
  };

  return (
    <div className="question" aria-live="polite">
      <h2>{question.question}</h2>

      <ul className="answers-grid" role="list">
        {question.options.map((option: string, i: number) => {
          const isSelected = selectedIndex === i;
          const isCorrect = i === question.correctIndex;

          let className = "answer";
          if (showCorrect) {
            if (isCorrect) className += " correct";
            else if (isSelected && !isCorrect) className += " wrong";
          } else if (isSelected) {
            className += " selected";
          }

          return (
            <li
              key={i}
              role="button"
              tabIndex={0}
              className={className}
              onClick={() => handleClick(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleClick(i);
                }
              }}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
