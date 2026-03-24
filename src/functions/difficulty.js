const difficultyElement = document.getElementById("difficulty");

export let difficulty = "normal";

export function setDifficulty(value) {
  difficulty = value;
  difficultyElement.textContent = difficulty.toUpperCase();
}

difficultyElement.textContent = difficulty.toUpperCase();
