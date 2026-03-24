import { Enemy } from "../entities/enemy";
import { paused } from "./state";
import { player } from "../entities/player";

function getRandomPosition() {
  const angle = Math.random() * Math.PI * 2;
  const distance = 1200;
  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;
  return [x + player.x, y + player.y];
}

function generateSmallEnemy() {
  const [x, y] = getRandomPosition();
  new Enemy(x, y, 12, "#098723", 0.8);
}

function generateMediumEnemy() {
  const [x, y] = getRandomPosition();
  new Enemy(x, y, 20, "#d0912a", 1.6);
}

function generateLargeEnemy() {
  const [x, y] = getRandomPosition();
  new Enemy(x, y, 38, "#dd1111", 4);
}

setInterval(() => {
  if (paused) return;
  generateSmallEnemy();
}, 1500);

setInterval(() => {
  if (paused) return;
  generateMediumEnemy();
}, 1000);

setInterval(() => {
  if (paused) return;
  generateLargeEnemy();
}, 5000);
