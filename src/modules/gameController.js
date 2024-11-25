import { createPlayer } from "../factories/Player";
import { displayGameboard } from "./displayController";
export const gameController = (() => {
  let player;
  let computer;
  const setUpGame = () => {
    player = createPlayer();
    computer = createPlayer();
    player.gameboard.placeShip(0, 0, 0, 1);
    computer.gameboard.placeShip(0, 0, 0, 1);
  };
  const gameLoop = () => {
    setUpGame();
    displayGameboard.render(player.gameboard.getBoard());
  };
  return {
    gameLoop,
  };
})();
