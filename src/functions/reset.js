import { player } from "../entities/player";
import { bulletList, enemyList, setPaused } from "./state";
import { resetScore } from "./score";

export const reset = () => {
  player.x = 0;
  player.y = 0;
  bulletList.length = 0;
  enemyList.length = 0;
  setPaused(true);
  resetScore();
};
