import { Enemy } from "../entities/enemy";
import { paused } from "./state";

function getRandomPosition() {
  return Math.random() * 1800 - 900;
}

function generateSmallEnemy() {
  new Enemy(getRandomPosition(), getRandomPosition(), 12, "#098723", 0.8);
}

function generateMediumEnemy() {
  new Enemy(getRandomPosition(), getRandomPosition(), 20, "#d0912a", 1.6);
}

function generateLargeEnemy() {
  new Enemy(getRandomPosition(), getRandomPosition(), 38, "#dd1111", 4);
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
