import { Entity } from "./entity";
import {
  canvas,
  ctx,
  deltaTime,
  enemyList,
  mouseX,
  mouseY,
  pressedKeys,
} from "../functions/state";
import { Bullet } from "./bullet";
import { checkCollision } from "../functions/collisions";
import { reset } from "../functions/reset";

export class Player extends Entity {
  constructor(x, y, radius, color) {
    super(x, y, radius, color);
    window.addEventListener("click", (event) => {
      event.preventDefault();
      new Bullet(this.x, this.y, 6, "#ffffff", this.angle);
    });
  }

  angle = 0;

  pointtToMOuse() {
    const dx = mouseX - canvas.width / 2;
    const dy = mouseY - canvas.height / 2;

    this.angle = Math.PI / 2 - Math.atan2(dx, dy);
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

    if (pressedKeys.w) this.y -= relativeSpeed * deltaTime;
    if (pressedKeys.s) this.y += relativeSpeed * deltaTime;
    if (pressedKeys.a) this.x -= relativeSpeed * deltaTime;
    if (pressedKeys.d) this.x += relativeSpeed * deltaTime;
    if (this.x > 1000) this.x = 1000;
    if (this.x < -1000) this.x = -1000;
    if (this.y > 1000) this.y = 1000;
    if (this.y < -1000) this.y = -1000;
  }

  draw() {
    ctx.save();

    ctx.fillStyle = this.color;
    ctx.rotate(this.angle);
    this.drawPolygon(0, 0, this.radius + 4, 3);

    ctx.restore();
  }

  checkCollisionWithEnemy() {
    for (let i = 0; i < enemyList.length; i++) {
      if (checkCollision(this, enemyList[i])) {
        reset();
      }
    }
  }

  update() {
    this.pointtToMOuse();
    this.checkCollisionWithEnemy();
    this.move();
    this.draw();
  }
}

export const player = new Player(0, 0, 8, "#ffffff");
