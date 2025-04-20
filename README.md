<div align="center">
  <img src="https://res.cloudinary.com/ddjsyskef/image/upload/v1745160017/public/bvwpp3whqzdb00a8ppc2.png" alt="Bible Trivia Game Screenshot" style="max-width: 500px; width: 100%; border-radius: 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.08); margin-bottom: 16px;" />
</div>

# Bible Trivia Game

A simple, captivating and engaging Christian Bible trivia game built with React and Vite. The application dynamically loads thought-provoking questions and answers from a local JSON file, offering a rich and interactive learning experience. It features a robust system to locally store and display the high scores of players, fostering friendly competition and encouraging repeated engagement with the scriptures.

## Features

- **Dynamic Questions:** Loads Bible trivia questions from a local JSON file (`public/questions.json`).
- **Interactive Gameplay:** Multiple-choice questions with immediate feedback.
- **High Scores:** Stores and displays top scores in the browser using `localStorage`.
- **Modern UI:** Colorful, card-based interface inspired by modern ed-tech dashboards.
- **Responsive Design:** Works well on both desktop and mobile devices.

## Getting Started

1. **Install dependencies:**
   ```bash
   git clone https://github.com/ekaone/bible-quiz.git
   
   pnpm install
   ```
2. **Start the development server:**
   ```bash
   pnpm run dev
   ```
3. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Project Structure

```
public/
  questions.json         # Bible trivia questions and answers
src/
  components/           # React components (QuestionCard, ScoreBoard, HighScores)
  styles/App.css        # Main styles (colorful cards, layout)
  App.jsx               # Main app logic
```

## Customizing Questions

Edit `public/questions.json` to add, remove, or modify Bible trivia questions. Each question should have:
- `question`: The question text
- `options`: Array of answer choices
- `answer`: The correct answer
- `category`: (optional) Used for card color

## High Scores

High scores are saved in the browser's local storage. To reset, clear your site data in the browser.

## Credits

- Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/)
- UI inspired by modern education dashboards

---
Enjoy learning and competing in Bible knowledge!
