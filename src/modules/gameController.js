import { createPlayer } from "../factories/Player";
import { displayGameboard } from "./displayController";
export const gameController = (() => {
  let player;
  let computer;
  const setUpGame = async () => {
    player = createPlayer(10, 10);
    computer = createPlayer(10, 10);
    displayGameboard.render(player.gameboard, "player");
    displayGameboard.render(computer.gameboard, "computer");
    // let player place ships
    for (let s = 0; s < 1; s++) {
      const coordinates = [];
      for (let i = 0; i < 3; i++) {
        const coordinate = await displayGameboard.setUpPlayerBoard(player);
        // check ship is one ship
        if (
          i > 0 &&
          (Math.abs(coordinates[i - 1][0] - coordinate[0]) > 1 ||
            Math.abs(coordinates[i - 1][1] - coordinate[1]) > 1)
        ) {
          console.log("wrong");
          i -= 1;
          continue;
        }

        coordinates.push(coordinate);
      }
      // place ship horizontaly
      if (coordinates.every((c) => c[0] === coordinates[0][0])) {
        console.log("hi");
        const c1 = coordinates.sort((a, b) => a[1] - b[1])[0];
        const c2 = coordinates.sort((a, b) => a[1] - b[1]).at(-1);
        player.gameboard.placeShip(c1[0], c1[1], c2[0], c2[1]);
      }
      // playe ship verticaly
      if (coordinates.every((c) => c[1] === coordinates[0][1])) {
        const c3 = coordinates.sort((a, b) => a[0] - b[0])[0];
        const c4 = coordinates.sort((a, b) => a[0] - b[0]).at(-1);
        player.gameboard.placeShip(c3[0], c3[1], c4[0], c4[1]);
      }
    }

    computer.gameboard.placeShip(0, 0, 0, 1);
  };

  const gameLoop = async () => {
    await setUpGame();

    // game loop
    for (let i = 0; i < 110; i++) {
      displayGameboard.render(player.gameboard, "player");
      displayGameboard.render(computer.gameboard, "computer");
      // check win conditions
      if (player.gameboard.allSunk()) {
        console.log("computer has won");
        break;
      }

      if (computer.gameboard.allSunk()) {
        console.log("player has won");
        break;
      }
      let validMove = true;
      // player move
      while (validMove) {
        const playerMoved = await waitForPlayerMove();

        const [row, col] = computer.gameboard.selectedField();

        validMove = computer.gameboard.isValidMove(row, col);
        if (validMove) {
          computer.gameboard.receiveAttack(row, col);
          break;
        }
      }

      // computer move
      while (validMove) {
        const r = getRandomInt(player.gameboard.getBoard().length);
        const c = getRandomInt(player.gameboard.getBoard()[0].length);
        validMove = player.gameboard.isValidMove(r, c);

        if (validMove) {
          player.gameboard.receiveAttack(r, c);
          break;
        }
      }
    }
  };

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };
  const waitForPlayerMove = () => {
    return new Promise((resolve) => {
      // does not work in gaps
      // const computerBoard = document.getElementById("computer-board");
      const computerfields = document.querySelectorAll(".gameboard-field");
      for (let i = 0; i < computerfields.length; i++) {
        computerfields[i].addEventListener("click", () => {
          resolve(true);
        });
      }
    });
  };
  return {
    gameLoop,
  };
})();
