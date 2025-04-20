import React, { useEffect, useState } from "react";
import "../styles/App.css";

export default function HighScores() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bibleGameHighScores") || "[]");
    setScores(saved.sort((a, b) => b.score - a.score).slice(0, 5));
  }, []);

  return (
    <div className="high-scores-card card-yellow">
      <div className="high-scores-title">🏆 High Scores</div>
      <ol className="high-scores-list">
        {scores.length === 0 && <li>No scores yet. Be first!</li>}
        {scores.map((item, idx) => (
          <li key={idx}>
            <span className="player-name">{item.name}</span> — <span className="player-score">{item.score}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
