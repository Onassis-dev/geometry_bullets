import { pressedKeys } from "./state";

window.addEventListener("keydown", (event) => {
  pressedKeys[event.key] = true;
});

window.addEventListener("keyup", (event) => {
  pressedKeys[event.key] = false;
});
