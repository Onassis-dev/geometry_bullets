export const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
export const ctx = canvas.getContext("2d");

export const pressedKeys = {};

export const renderList = [];

export let mouseX = 0;
export let mouseY = 0;

window.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});
