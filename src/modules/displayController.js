export const displayGameboard = (() => {
  const render = (gb, type) => {
    clear(type);
    const gameboard = gb.getBoard();
    const boardContainer = document.createElement("div");
    // choose the rigth id
    if (type == "player") {
      boardContainer.id = "player-board";
    } else if (type == "computer") {
      boardContainer.id = "computer-board";
    } else {
      console.log("not implemented type");
    }
    boardContainer.classList.add("gameboard-container");
    // make rectangle
    boardContainer.style.gridTemplateRows = `repeat(${gameboard.length}, 0.5fr)`;
    boardContainer.style.gridTemplateColumns = `repeat(${gameboard[0].length}, 0.5fr)`;
    for (let i = 0; i < gameboard.length * gameboard[0].length; i++) {
      const gameBoardField = document.createElement("div");
      gameBoardField.classList.add("gameboard-field");
      gameBoardField.addEventListener("click", () => {
        const row = Math.floor(i / gameboard[0].length);
        const col = i % gameboard.length;
        gb.selectField(row, col);
      });
      // field content
      if (Array.isArray(gameboard.flat()[i])) {
        if (gameboard.flat()[i][0].isShip && gameboard.flat()[i][1] == "X") {
          gameBoardField.textContent = "xXx";
        }
        if (
          gameboard.flat()[i][0].isShip &&
          type == "player" &&
          !gameboard.flat()[i][1]
        ) {
          gameBoardField.textContent = "ship";
        }
      }

      if (gameboard.flat()[i] == "X") {
        gameBoardField.textContent = "X";
      }
      if (gameboard.flat()[i] == "s") {
        gameBoardField.textContent = "s";
      }
      boardContainer.appendChild(gameBoardField);
    }

    // add to right id
    if (type == "player") {
      const playerBoard = document.getElementById("player-board");
      playerBoard.appendChild(boardContainer);
    } else if (type == "computer") {
      const computerBoard = document.getElementById("computer-board");
      computerBoard.appendChild(boardContainer);
    } else {
      console.log("not implemented type");
    }
  };
  const clear = (type) => {
    if (type == "player") {
      const playerBoard = document.getElementById("player-board");
      while (playerBoard.firstChild) {
        playerBoard.removeChild(playerBoard.firstChild);
      }
    } else if (type == "computer") {
      const computerBoard = document.getElementById("computer-board");
      while (computerBoard.firstChild) {
        computerBoard.removeChild(computerBoard.firstChild);
      }
    } else {
      console.log("not implemented type");
    }
  };
  const setUpPlayerBoard = (player) => {
    return new Promise((resolve) => {
      // const computerBoard = document.getElementById("computer-board");
      const cboard = document.getElementById("player-board");
      const computerfields = cboard.querySelectorAll(".gameboard-field");
      for (let i = 0; i < computerfields.length; i++) {
        computerfields[i].addEventListener("click", () => {
          computerfields[i].textContent = "ship";
          resolve(player.gameboard.idxToRowCols(i));
        });
      }
    });
  };
  return {
    render,
    setUpPlayerBoard,
  };
})();
