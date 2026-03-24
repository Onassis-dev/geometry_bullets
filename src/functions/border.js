import { player } from "../entities/player";
import { ctx } from "./state";

export function drawBorder() {
  ctx.save();
  ctx.strokeStyle = "#242424";
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.strokeRect(-player.x - 1000, -player.y - 1000, 2000, 2000);
  ctx.restore();
}
