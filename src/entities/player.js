import { Entity } from "./entity";
import {
  canvas,
  ctx,
  deltaTime,
  enemyList,
  mouseX,
  mouseY,
  stopped,
  pressedKeys,
} from "../functions/state";
import { Bullet } from "./bullet";
import { checkCollision } from "../functions/collisions";
import { reset } from "../functions/reset";
import { playClickAudio, playTeleportAudio } from "../functions/audio";

export class Player extends Entity {
  constructor(x, y, radius, color) {
    super(x, y, radius, color);
    window.addEventListener("click", (event) => {
      event.preventDefault();
      if (!stopped) new Bullet(this.x, this.y, 6, "#ffffff", this.angle);
    });
    window.addEventListener("keypress", (event) => {
      if (stopped) return;
      if (
        event.key === " " &&
        this.teleportCooldown <= 0 &&
        !this.teleporting
      ) {
        this.toGoX = this.x + (mouseX - canvas.width / 2);
        this.toGoY = this.y + (mouseY - canvas.height / 2);
        this.toGoAngle =
          Math.PI / 2 -
          Math.atan2(mouseX - canvas.width / 2, mouseY - canvas.height / 2);

        this.teleporting = true;
        playTeleportAudio();
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
  teleportCooldown = 0;

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
    this.color = "#ddaaaa";
    this.teleportCooldown = 100;

    if (distanceToGo > movedDistance) {
      this.x += this.teleportSpeed * Math.cos(this.toGoAngle) * deltaTime;
      this.y += this.teleportSpeed * Math.sin(this.toGoAngle) * deltaTime;

      if (this.x > 1500) {
        this.x = 1500;
        this.teleporting = false;
      }
      if (this.x < -1500) {
        this.x = -1500;
        this.teleporting = false;
      }
      if (this.y > 1500) {
        this.y = 1500;
        this.teleporting = false;
      }
      if (this.y < -1500) {
        this.y = -1500;
        this.teleporting = false;
      }
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

  updateTeleportCooldown() {
    if (this.teleportCooldown > 0) {
      this.teleportCooldown -= deltaTime;
      if (this.teleportCooldown <= 0) {
        this.teleportCooldown = 0;
        this.color = "#ffffff";
        playClickAudio();
      }
    }
  }

  update() {
    this.pointToMouse();
    this.checkCollisionWithEnemy();
    this.move();
    this.updateTeleportCooldown();
    this.draw();
  }
}

export const player = new Player(0, 0, 8, "#ffffff");
