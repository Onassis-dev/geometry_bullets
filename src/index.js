import { player } from "./entities/player";
import {
  ctx,
  canvas,
  setDeltaTime,
  bulletList,
  enemyList,
  paused,
} from "./functions/state";

import "./functions/fps";
import "./functions/input";
import "./functions/enemyGenerator";
import "./entities/player";
import { drawBorder } from "./functions/border";

function drawCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.translate(canvas.width / 2, canvas.height / 2);
  canvas.style.backgroundColor = "#121212";
}

window.addEventListener("resize", () => {
  drawCanvas();
});
drawCanvas();

let lastRender = performance.now();
function render(thisRender) {
  setDeltaTime(thisRender - lastRender);
  lastRender = thisRender;

  if (paused) return requestAnimationFrame(render);

  ctx.clearRect(
    -canvas.width / 2,
    -canvas.height / 2,
    canvas.width,
    canvas.height,
  );

  drawBorder();
  for (let i = 0; i < bulletList.length; i++) {
    bulletList[i].update();
  }
  for (let i = 0; i < enemyList.length; i++) {
    enemyList[i].update();
  }
  player.update();

  requestAnimationFrame(render);
}

requestAnimationFrame(render);

// Add a sound on bullet shoot
// Add a sound on game over

// Add a settings screen
// Improve the position of spawn
// Add the teleport function
