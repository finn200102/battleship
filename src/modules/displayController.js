export const displayGameboard = (() => {
  const render = (gameboard) => {
    const boardContainer = document.createElement("div");
    boardContainer.classList.add("gameboard-container");
    for (let i = 0; i < gameboard.length * gameboard[0].length; i++) {
      const gameBoardField = document.createElement("div");
      gameBoardField.classList.add("gameboard-field");
      boardContainer.appendChild(gameBoardField);
    }
    document.body.appendChild(boardContainer);
  };
  return {
    render,
  };
})();
