import { Entity } from "./entity";
import { canvas, ctx, mouseX, mouseY, pressedKeys } from "../functions/state";
import { Bullet } from "./bullet";

export class Player extends Entity {
  constructor(x, y, radius, color) {
    super(x, y, radius, color);
  }

  angle = 0;

  pointtToMOuse() {
    const dx = mouseX - canvas.width / 2;
    const dy = mouseY - canvas.height / 2;

    this.angle = Math.PI / 2 - Math.atan2(dx, dy);

    window.addEventListener("click", (event) => {
      event.preventDefault();
      new Bullet(this.x, this.y, 6, "#ffffff", this.angle);
    });
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
    ctx.save();

    ctx.fillStyle = this.color;
    ctx.rotate(this.angle);
    this.drawPolygon(0, 0, this.radius, 3);

    ctx.restore();
  }

  update() {
    this.pointtToMOuse();
    this.move();
    this.draw();
  }
}

export const player = new Player(0, 0, 12, "#ffffff");
