const el = document.getElementById("canvas");
if (!(el instanceof HTMLCanvasElement)) {
  throw new Error("Missing or invalid #canvas element");
}
export const canvas = el;
document.body.appendChild(canvas);

const context = canvas.getContext("2d");
if (!context) {
  throw new Error("2D context unavailable");
}
export const ctx = context;

export const pressedKeys = {};

export const bulletList = [];
export const enemyList = [];

export let mouseX = 0;
export let mouseY = 0;

export let paused = false;
export function setPaused(value) {
  paused = value;
}

export let deltaTime = 0;
export function setDeltaTime(value) {
  deltaTime = value / 10;
}

window.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});
