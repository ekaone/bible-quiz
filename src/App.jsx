import React, { useEffect, useState } from "react";
import QuestionCard from "./components/QuestionCard";
import ScoreBoard from "./components/ScoreBoard";
import HighScores from "./components/HighScores";
import "./styles/App.css";

function saveHighScore(name, score) {
  const scores = JSON.parse(localStorage.getItem("bibleGameHighScores") || "[]");
  scores.push({ name, score });
  localStorage.setItem("bibleGameHighScores", JSON.stringify(scores));
}

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch("/questions.json")
      .then(res => res.json())
      .then(data => setQuestions(data));
  }, []);

  function handleAnswer(opt) {
    setSelected(opt);
    if (opt === questions[current].answer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 900);
  }

  function handleRestart() {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
    setSubmitted(false);
    setPlayerName("");
  }

  function handleSubmitScore(e) {
    e.preventDefault();
    if (playerName.trim()) {
      saveHighScore(playerName, score);
      setSubmitted(true);
    }
  }

  return (
    <div className="app-container">
      <div className="main-content">
        <h1 style={{ marginBottom: 12 }}>
          <span role="img" aria-label="Bible">📖</span> Bible Trivia Game
        </h1>
        {!showResult && questions.length > 0 && (
          <>
            <ScoreBoard score={score} total={questions.length} questionNum={current} />
            <QuestionCard
              question={questions[current].question}
              options={questions[current].options}
              category={questions[current].category}
              onAnswer={handleAnswer}
              selectedAnswer={selected}
              correctAnswer={questions[current].answer}
            />
          </>
        )}
        {showResult && (
          <div className="question-card card-green" style={{ textAlign: "center" }}>
            <h2>Quiz Complete!</h2>
            <p>Your Score: <b>{score} / {questions.length}</b></p>
            {!submitted ? (
              <form onSubmit={handleSubmitScore} style={{ marginBottom: 12 }}>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={playerName}
                  onChange={e => setPlayerName(e.target.value)}
                  style={{
                    padding: "8px 12px",
                    borderRadius: 8,
                    border: "1px solid #ccc",
                    fontSize: "1rem",
                    marginRight: 10
                  }}
                  required
                />
                <button
                  type="submit"
                  style={{
                    padding: "8px 16px",
                    borderRadius: 8,
                    border: "none",
                    background: "#a6c1ff",
                    fontWeight: 600,
                    cursor: "pointer"
                  }}
                >Save Score</button>
              </form>
            ) : (
              <div style={{ color: "#43c46b", fontWeight: 600, marginBottom: 12 }}>Score Saved!</div>
            )}
            <button className="option-btn" onClick={handleRestart} style={{ marginTop: 10, color: '#1f2937' }}>
              Play Again
            </button>
          </div>
        )}
      </div>
      <div className="sidebar">
        <HighScores />
        <div style={{ fontSize: "1rem", color: "#8e8e8e", marginTop: 12, textAlign: "center" }}>
          Test your Bible knowledge and climb the leaderboard!
        </div>
      </div>
    </div>
  );
}
