import { pressedKeys, setPaused, paused } from "./state";

window.addEventListener("keydown", (event) => {
  pressedKeys[event.key] = true;
  if (event.key === "Escape") setPaused(!paused);
});

window.addEventListener("keyup", (event) => {
  pressedKeys[event.key] = false;
});
