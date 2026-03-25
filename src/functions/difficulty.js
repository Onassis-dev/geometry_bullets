import { updateHighScoreDifficulty } from "./score";

const difficultyElement = document.getElementById("difficulty");

export let difficulty = "normal";

export function setDifficulty(value) {
  difficulty = value;
  difficultyElement.textContent = difficulty.toUpperCase();
  updateHighScoreDifficulty();
}

difficultyElement.textContent = difficulty.toUpperCase();
