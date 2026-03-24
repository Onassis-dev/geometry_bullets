import { player } from "../entities/player";
import { ctx } from "./state";

export function drawBorder() {
  ctx.save();
  ctx.strokeStyle = "#242424";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.strokeRect(-player.x - 1500, -player.y - 1500, 3000, 3000);
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#242424";
  ctx.arc(-player.x - 0, -player.y - 0, 10, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}
