import { deltaTime } from "../functions/state";
import { RelativeEntity } from "./entity";
import { player } from "./player";

export class Enemy extends RelativeEntity {
  constructor(x, y, radius, color, speed) {
    super(x, y, radius, color);
    this.speed = speed;
  }

  moveTowardsPlayer() {
    const dx = player.x - this.x;
    const dy = player.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    this.x += (dx / distance) * this.speed * deltaTime;
    this.y += (dy / distance) * this.speed * deltaTime;
  }

  update() {
    this.moveTowardsPlayer();
    this.draw(player);
  }
}
