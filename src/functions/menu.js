import { setPaused } from "./state";

export const menu = document.getElementById("menu");
export const playButton = document.getElementById("play-button");

playButton.addEventListener("click", () => {
  setPaused(false);
});
