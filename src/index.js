import { ctx, canvas, renderList } from "./functions/state";

import "./functions/input";
import "./entities/enemy";
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

function render() {
  ctx.clearRect(
    -canvas.width / 2,
    -canvas.height / 2,
    canvas.width,
    canvas.height,
  );

  renderList.forEach((object) => {
    object.update();
  });

  requestAnimationFrame(render);
}

render();
