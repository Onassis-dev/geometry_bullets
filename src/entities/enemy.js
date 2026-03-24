import { checkCollision } from "../functions/collisions";
import { bulletList, deltaTime, enemyList } from "../functions/state";
import { RelativeEntity } from "./entity";
import { incrementScore } from "../functions/score";
import { player } from "./player";

export class Enemy extends RelativeEntity {
  constructor(x, y, radius, color, speed) {
    super(x, y, radius, color);
    this.speed = speed;
    enemyList.push(this);
  }

  moveTowardsPlayer() {
    const dx = player.x - this.x;
    const dy = player.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    this.x += (dx / distance) * this.speed * deltaTime;
    this.y += (dy / distance) * this.speed * deltaTime;
  }

  checkCollisionWithBullet() {
    for (let i = 0; i < bulletList.length; i++) {
      if (checkCollision(this, bulletList[i])) {
        enemyList.splice(enemyList.indexOf(this), 1);
        incrementScore();
      }
    }
  }

  update() {
    this.moveTowardsPlayer();
    this.checkCollisionWithBullet();
    this.draw(player);
  }
}
