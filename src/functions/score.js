import { difficulty } from "./difficulty";

const scoreElement = document.getElementById("score");
const highScoreElement = document.getElementById("high-score");

export let score = 0;

export function incrementScore() {
  score++;
  showScore();
}
export function resetScore() {
  if (score > highScore) setHighScore(score);
  score = 0;
  showScore();
}

export let highScore =
  Number(localStorage.getItem("highScore_" + difficulty)) || 0;
export function setHighScore(value) {
  highScore = value;
  showHighScore();
  localStorage.setItem("highScore_" + difficulty, highScore.toString());
}

function showScore() {
  scoreElement.textContent = "Score: " + score.toString();
}

function showHighScore() {
  highScoreElement.textContent = "High Score: " + highScore.toString();
}

showHighScore();
showScore();
