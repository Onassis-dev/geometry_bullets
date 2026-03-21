import { Enemy } from "../entities/enemy";

function getRandomPosition() {
  return Math.random() * 1800 - 900;
}

function generateSmallEnemy() {
  new Enemy(getRandomPosition(), getRandomPosition(), 8, "#098723", 0.5);
}

function generateMediumEnemy() {
  new Enemy(getRandomPosition(), getRandomPosition(), 16, "#d0912a", 1);
}

function generateLargeEnemy() {
  new Enemy(getRandomPosition(), getRandomPosition(), 32, "#dd1111", 2);
}

setInterval(() => {
  generateSmallEnemy();
}, 1500);

setInterval(() => {
  generateMediumEnemy();
}, 1000);

setInterval(() => {
  generateLargeEnemy();
}, 5000);
