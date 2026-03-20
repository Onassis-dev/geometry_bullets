import { ctx } from "../functions/state";

export class Entity {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }
}

export class RelativeEntity extends Entity {
  constructor(x, y, radius, color) {
    super(x, y, radius, color);
  }

  draw(player) {
    ctx.beginPath();
    ctx.arc(this.x - player.x, this.y - player.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}
