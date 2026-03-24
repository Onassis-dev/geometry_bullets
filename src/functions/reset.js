import { player } from "../entities/player";
import { bulletList, enemyList, setGameOver, setPaused } from "./state";
import { resetScore } from "./score";

export const reset = () => {
  player.x = 0;
  player.y = 0;
  bulletList.length = 0;
  enemyList.length = 0;
  setGameOver(true);
  setPaused(false);
  resetScore();
};
