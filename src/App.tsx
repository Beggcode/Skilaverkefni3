import { useState } from "react"
import QuestionComponent from "./components/QuestionComponent"
import { questions } from "./components/Questions"
import { calculateScore } from "./utils"
import "./App.css"

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showScore, setShowScore] = useState(false)

  const handleAnswer = (answerIndex: number) => {
    setAnswers([...answers, answerIndex])
    const nextIndex = currentQuestionIndex + 1
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex)
    } else {
      setShowScore(true)
    }
  }

  const handleReset = () => {
    setCurrentQuestionIndex(0)
    setAnswers([])
    setShowScore(false)
  }

  if (showScore) {
    const score = calculateScore(questions, answers)
    return (
      <div style={{ padding: "20px" }}>
        <h1>Þú fékkst {score}/{questions.length} rétt</h1>
        <button onClick={handleReset} style={{ padding: "8px 16px", marginTop: "16px" }}>
          Reyna aftur
        </button>
      </div>
    )
  }

  return (
    <div style={{ padding: "20px" }}>
      <QuestionComponent
        question={questions[currentQuestionIndex]}
        onAnswer={handleAnswer}
      />
      <p>Spurning {currentQuestionIndex + 1} af {questions.length}</p>
    </div>
  )
}
