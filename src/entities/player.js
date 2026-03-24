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
        this.toGoAngle = this.angle;
        this.teleporting = true;
      }
    });
  }

  angle = 0;
  toGoX = 0;
  toGoY = 0;
  toGoAngle = 0;
  teleportSpeed = 20;
  teleporting = false;
  speed = 4;

  pointToMouse() {
    const dx = mouseX - canvas.width / 2;
    const dy = mouseY - canvas.height / 2;

    this.angle = Math.PI / 2 - Math.atan2(dx, dy);
  }

  move() {
    if (this.teleporting) return this.teleport();
    let relativeSpeed = this.speed;

    if (
      Number(pressedKeys.w) +
        Number(pressedKeys.s) +
        Number(pressedKeys.a) +
        Number(pressedKeys.d) >=
      2
    )
      relativeSpeed = (this.speed * Math.sqrt(2)) / 2;

    if (pressedKeys.w) this.y -= relativeSpeed * deltaTime;
    if (pressedKeys.s) this.y += relativeSpeed * deltaTime;
    if (pressedKeys.a) this.x -= relativeSpeed * deltaTime;
    if (pressedKeys.d) this.x += relativeSpeed * deltaTime;
    if (this.x > 1500) this.x = 1500;
    if (this.x < -1500) this.x = -1500;
    if (this.y > 1500) this.y = 1500;
    if (this.y < -1500) this.y = -1500;
  }

  teleport() {
    const distanceToGo = Math.sqrt(
      (this.toGoX - this.x) ** 2 + (this.toGoY - this.y) ** 2,
    );
    const movedDistance = this.teleportSpeed * deltaTime;

    if (distanceToGo > movedDistance) {
      this.x += this.teleportSpeed * Math.cos(this.toGoAngle) * deltaTime;
      this.y += this.teleportSpeed * Math.sin(this.toGoAngle) * deltaTime;
    } else {
      this.x = this.toGoX;
      this.y = this.toGoY;
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
    this.pointToMouse();
    this.checkCollisionWithEnemy();
    this.move();
    this.draw();
  }
}

export const player = new Player(0, 0, 8, "#ffffff");
