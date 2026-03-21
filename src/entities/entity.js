import { ctx, renderList } from "../functions/state";

export class Entity {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    renderList.push(this);
  }

  drawPolygon(cx, cy, r, n) {
    ctx.beginPath();

    for (let i = 0; i < n; i++) {
      const angle = (i / n) * Math.PI * 2;

      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);

      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }

    ctx.closePath();
    ctx.fill();
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
