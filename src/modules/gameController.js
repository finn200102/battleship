import { createPlayer } from "../factories/Player";
import { displayGameboard } from "./displayController";
export const gameController = (() => {
  let player;
  let computer;
  const setUpGame = () => {
    player = createPlayer(10, 10);
    computer = createPlayer(10, 10);
    player.gameboard.placeShip(0, 0, 0, 1);
    computer.gameboard.placeShip(0, 0, 0, 1);
  };
  const gameLoop = () => {
    setUpGame();
    displayGameboard.render(player.gameboard.getBoard(), "player");
    displayGameboard.render(computer.gameboard.getBoard(), "computer");
  };
  return {
    gameLoop,
  };
})();
