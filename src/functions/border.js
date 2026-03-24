import { player } from "../entities/player";
import { ctx } from "./state";

export function drawBorder() {
  ctx.save();
  ctx.strokeStyle = "#242424";
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.strokeRect(-player.x - 1500, -player.y - 1500, 3000, 3000);
  ctx.restore();
}
