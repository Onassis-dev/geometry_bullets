import { RelativeEntity } from "./entity";
import { player } from "./player";

export class Bullet extends RelativeEntity {
  constructor(x, y, radius, color, angle) {
    super(x, y, radius, color);
    this.angle = angle;
  }

  speed = 20;

  advance() {
    this.x += this.speed * Math.cos(this.angle);
    this.y += this.speed * Math.sin(this.angle);
  }

  update() {
    this.advance();
    this.draw(player);
  }
}
