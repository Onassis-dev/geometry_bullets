import { RelativeEntity } from "./entity";
import { player } from "./player";
import { bulletList, deltaTime } from "../functions/state";
import { playShootAudio } from "../functions/audio";

export class Bullet extends RelativeEntity {
  constructor(x, y, radius, color, angle) {
    super(x, y, radius, color);
    this.angle = angle;
    bulletList.push(this);
    playShootAudio();
  }

  speed = 14;

  advance() {
    if (this.x > 3000 || this.x < -3000 || this.y > 3000 || this.y < -3000) {
      bulletList.splice(bulletList.indexOf(this), 1);
    }
    this.x += this.speed * Math.cos(this.angle) * deltaTime;
    this.y += this.speed * Math.sin(this.angle) * deltaTime;
  }

  update() {
    this.advance();
    this.draw(player);
  }
}
