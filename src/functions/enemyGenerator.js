import { Enemy } from "../entities/enemy";
import { paused } from "./state";
import { player } from "../entities/player";
import { difficulty } from "./difficulty";

const smallEnemyInterval = {
  normal: 1800,
  hard: 1000,
  fast: 1500,
};
const mediumEnemyInterval = {
  normal: 1200,
  hard: 500,
  fast: 1000,
};
const largeEnemyInterval = {
  normal: 6000,
  hard: 2500,
  fast: 800,
};

const smallEnemySpeed = {
  normal: 0.8,
  hard: 1.2,
  fast: 1.6,
};
const mediumEnemySpeed = {
  normal: 1.6,
  hard: 2.4,
  fast: 3.2,
};
const largeEnemySpeed = {
  normal: 3.2,
  hard: 4.8,
  fast: 6,
};

function getRandomPosition() {
  const angle = Math.random() * Math.PI * 2;
  const distance = 1200;
  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;
  return [x + player.x, y + player.y];
}

function generateSmallEnemy() {
  const [x, y] = getRandomPosition();
  new Enemy(x, y, 12, "#098723", smallEnemySpeed[difficulty]);
}

function generateMediumEnemy() {
  const [x, y] = getRandomPosition();
  new Enemy(x, y, 20, "#d0912a", mediumEnemySpeed[difficulty]);
}

function generateLargeEnemy() {
  const [x, y] = getRandomPosition();
  new Enemy(x, y, 38, "#dd1111", largeEnemySpeed[difficulty]);
}

const initializeSmallEnemyInterval = () => {
  setTimeout(() => {
    if (!paused) generateSmallEnemy();
    initializeSmallEnemyInterval();
  }, smallEnemyInterval[difficulty]);
};

const initializeMediumEnemyInterval = () => {
  setTimeout(() => {
    if (!paused) generateMediumEnemy();
    initializeMediumEnemyInterval();
  }, mediumEnemyInterval[difficulty]);
};

const initializeLargeEnemyInterval = () => {
  setTimeout(() => {
    if (!paused) generateLargeEnemy();
    initializeLargeEnemyInterval();
  }, largeEnemyInterval[difficulty]);
};

initializeSmallEnemyInterval();
initializeMediumEnemyInterval();
initializeLargeEnemyInterval();
