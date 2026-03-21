import { RelativeEntity } from "./entity";
import { player } from "./player";
import { deltaTime, renderList } from "../functions/state";

export class Bullet extends RelativeEntity {
  constructor(x, y, radius, color, angle) {
    super(x, y, radius, color);
    this.angle = angle;
  }

  speed = 15;

  advance() {
    if (this.x > 2000 || this.x < -2000 || this.y > 2000 || this.y < -2000) {
      renderList.splice(renderList.indexOf(this), 1);
    }
    this.x += this.speed * Math.cos(this.angle) * deltaTime;
    this.y += this.speed * Math.sin(this.angle) * deltaTime;
  }

  update() {
    this.advance();
    this.draw(player);
  }
}
