import { Entity } from "./entity";
import {
  canvas,
  ctx,
  deltaTime,
  enemyList,
  mouseX,
  mouseY,
  paused,
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
    window.addEventListener("keypress", (event) => {
      if (paused) return;
      if (event.key === " ") {
        this.toGoX = this.x + (mouseX - canvas.width / 2);
        this.toGoY = this.y + (mouseY - canvas.height / 2);
        this.teleporting = true;
      }
    });
  }

  angle = 0;
  toGoX = 0;
  toGoY = 0;
  teleporting = false;
  teleportSpeed = 15;

  pointtToMOuse() {
    const dx = mouseX - canvas.width / 2;
    const dy = mouseY - canvas.height / 2;

    this.angle = Math.PI / 2 - Math.atan2(dx, dy);
  }

  move() {
    if (this.teleporting) return this.teleport();
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

  teleport() {
    if (this.x > this.toGoX) this.x -= this.teleportSpeed * deltaTime;
    else if (this.x < this.toGoX) this.x += this.teleportSpeed * deltaTime;
    if (this.y > this.toGoY) this.y -= this.teleportSpeed * deltaTime;
    else if (this.y < this.toGoY) this.y += this.teleportSpeed * deltaTime;
    if (
      Math.abs(this.x - this.toGoX) < 30 &&
      Math.abs(this.y - this.toGoY) < 30
    ) {
      this.teleporting = false;
    }
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
      if (!this.teleporting && checkCollision(this, enemyList[i])) {
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
