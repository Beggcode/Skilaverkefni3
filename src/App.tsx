import { useState } from "react";
import QuestionComponent from "./components/QuestionComponent";
import { questions } from "./components/Questions";


export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (answerIndex === currentQuestion.correctIndex) setScore((s) => s + 1);

    if (currentQuestionIndex < questions.length - 1) setCurrentQuestionIndex(i => i + 1);
    else setQuizFinished(true);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizFinished(false);
  };

  return (
  <div className="quiz-container">
    {quizFinished ? (
      <>
        <h2>Þú svaraðir {score}/{questions.length} svörum rétt!</h2>
        <button className="btn" onClick={handleRestart}>Reyna aftur</button>
      </>
    ) : (
      <>
        <QuestionComponent
          key={currentQuestionIndex}
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
        <p className="quizState">Spurning {currentQuestionIndex + 1} af {questions.length}</p>
        <p className="quizState">Rétt svör hingað til: {score}</p>
      </>
    )}
  </div>
);
}
