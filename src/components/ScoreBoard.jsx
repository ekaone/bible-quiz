import React from "react";
import "../styles/App.css";

export default function ScoreBoard({ score, total, questionNum }) {
  return (
    <div className="score-board">
      <div className="score-label">Score</div>
      <div className="score-value">{score} / {total}</div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${((questionNum + 1) / total) * 100}%` }}
        ></div>
      </div>
      <div className="question-counter">Question {questionNum + 1} of {total}</div>
    </div>
  );
}
