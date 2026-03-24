import { setPaused } from "./state";
import { setDifficulty } from "./difficulty";

export const menu = document.getElementById("menu");
export const playButton = document.getElementById("play-button");
export const howToPlayButton = document.getElementById("how-to-play-button");
export const settingsButton = document.getElementById("settings-button");
export const creditsButton = document.getElementById("credits-button");
export const backButton = document.getElementById("back-button");

export const credits = document.getElementById("credits");
export const settings = document.getElementById("settings");
export const howToPlay = document.getElementById("how-to-play");
export const menuButtons = document.getElementById("menu-buttons");
export const difficultyButtons = document.getElementById("difficulty-buttons");

playButton.addEventListener("click", () => {
  setPaused(false);
});

creditsButton.addEventListener("click", () => {
  hideAllMenus();
  credits.style.display = "block";
  backButton.style.display = "inline-block";
});

howToPlayButton.addEventListener("click", () => {
  hideAllMenus();
  howToPlay.style.display = "block";
  backButton.style.display = "inline-block";
});

settingsButton.addEventListener("click", () => {
  hideAllMenus();
  settings.style.display = "block";
  backButton.style.display = "inline-block";
});

backButton.addEventListener("click", () => {
  hideAllMenus();
  menuButtons.style.display = "flex";
  backButton.style.display = "none";
});

function hideAllMenus() {
  menuButtons.style.display = "none";
  credits.style.display = "none";
  settings.style.display = "none";
  howToPlay.style.display = "none";
  backButton.style.display = "none";
}

difficultyButtons.querySelectorAll(".menu-button").forEach((button) => {
  button.addEventListener("click", () => {
    setDifficulty(button.id.split("-")[0]);
  });
});
