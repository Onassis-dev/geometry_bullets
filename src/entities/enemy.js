import { RelativeEntity } from "./entity";
import { player } from "./player";

export class Enemy extends RelativeEntity {
  constructor(x, y, radius, color) {
    super(x, y, radius, color);
  }

  moveTowardsPlayer() {
    const dx = player.x - this.x;
    const dy = player.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const speed = 0.1;
    this.x += (dx / distance) * speed;
    this.y += (dy / distance) * speed;
  }

  update() {
    this.moveTowardsPlayer();
    this.draw(player);
  }
}

new Enemy(100, 100, 10, "#d0912a");
new Enemy(200, 200, 10, "#238232");
new Enemy(300, 300, 10, "#82328d");
new Enemy(-400, 400, 10, "#d0912a");
new Enemy(500, -200, 10, "#b30432");
new Enemy(300, -300, 10, "#238232");
new Enemy(285, -74, 10, "#238232");
new Enemy(120, -234, 10, "#d0912a");
