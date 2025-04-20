import React from "react";
import "../styles/App.css";

const colorMap = {
  "Old Testament": "card-pink",
  "New Testament": "card-yellow",
  "Genesis": "card-green",
  "default": "card-blue"
};

export default function QuestionCard({
  question,
  options,
  category,
  onAnswer,
  selectedAnswer,
  correctAnswer
}) {
  const cardClass = colorMap[category] || colorMap["default"];

  return (
    <div className={`question-card ${cardClass}`}>
      <div className="question-category">{category}</div>
      <div className="question-text">{question}</div>
      <div className="options-list">
        {options.map((opt, idx) => (
          <button
            key={opt}
            className={`option-btn ${selectedAnswer === opt ? (opt === correctAnswer ? "correct" : "incorrect") : ""}`}
            onClick={() => onAnswer(opt)}
            disabled={!!selectedAnswer}
            style={{ color: '#1f2937' }} // Tailwind gray-800
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
