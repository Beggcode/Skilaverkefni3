import { useState } from "react";
import type { Question } from "../types";

interface Props {
  question: Question;
  onAnswer: (answerIndex: number) => void;
}

export default function QuestionComponent({ question, onAnswer }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
    setTimeout(() => onAnswer(index), 300);
  };

  return (
    <div>
      <h2>{question.question}</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {question.options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleClick(index)}
            style={{
              cursor: "pointer",
              backgroundColor: selectedIndex === index ? "#d3d3d3" : "transparent",
              padding: "8px",
              margin: "4px 0",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
