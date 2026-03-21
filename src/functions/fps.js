import { deltaTime } from "./state";

const fpsElement = document.getElementById("fps");

setInterval(() => {
  fpsElement.textContent =
    "fps: " + Math.round(1 / (deltaTime / 100)).toString();
}, 100);
