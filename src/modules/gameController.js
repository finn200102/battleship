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
  const gameLoop = async () => {
    setUpGame();

    // game loop
    for (let i = 0; i < 10; i++) {
      displayGameboard.render(player.gameboard, "player");
      displayGameboard.render(computer.gameboard, "computer");
      const playerMoved = await waitForPlayerMove();
      const [row, col] = computer.gameboard.selectedField();
      const validMove = computer.gameboard.isValidMove(row, col);
      if (!validMove) {
        continue;
      }
      computer.gameboard.receiveAttack(row, col);
    }
  };
  const waitForPlayerMove = () => {
    return new Promise((resolve) => {
      // does not work in gaps
      const computerBoard = document.getElementById("computer-board");
      computerBoard.addEventListener("click", () => {
        resolve(true);
      });
    });
  };
  return {
    gameLoop,
  };
})();
