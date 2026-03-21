import { ctx, canvas, renderList, setDeltaTime } from "./functions/state";

import "./functions/fps";
import "./functions/input";
import "./functions/enemyGenerator";
import "./entities/player";

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

  ctx.clearRect(
    -canvas.width / 2,
    -canvas.height / 2,
    canvas.width,
    canvas.height,
  );

  for (let i = 0; i < renderList.length; i++) {
    renderList[i].update();
  }

  requestAnimationFrame(render);
}

requestAnimationFrame(render);
