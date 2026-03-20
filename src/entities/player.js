import { Entity } from "./entity";
import {
  canvas,
  ctx,
  mouseX,
  mouseY,
  pressedKeys,
  renderList,
} from "../functions/state";

export class Player extends Entity {
  constructor(x, y, radius, color) {
    super(x, y, radius, color);
  }

  angle = 0;

  pointtToMOuse() {
    const dx = mouseX - canvas.width / 2;
    const dy = mouseY - canvas.height / 2;

    this.angle = (Math.atan2(dx, dy) * 180) / Math.PI;
  }

  move() {
    const speed = 4;
    let relativeSpeed = speed;
    if (
      Number(pressedKeys.w) +
        Number(pressedKeys.s) +
        Number(pressedKeys.a) +
        Number(pressedKeys.d) >=
      2
    )
      relativeSpeed = (speed * Math.sqrt(2)) / 2;

    if (pressedKeys.w) this.y -= relativeSpeed;
    if (pressedKeys.s) this.y += relativeSpeed;
    if (pressedKeys.a) this.x -= relativeSpeed;
    if (pressedKeys.d) this.x += relativeSpeed;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x - player.x, this.y - player.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    this.pointtToMOuse();
    this.move();
    this.draw();
  }
}

export const player = new Player(0, 0, 10, "#ffffff");
renderList.push(player);
