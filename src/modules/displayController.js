export const displayGameboard = (() => {
  const render = (gameboard, type) => {
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
      if (gameboard.flat()[i].isShip) {
        gameBoardField.textContent = "ship";
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
  return {
    render,
  };
})();
