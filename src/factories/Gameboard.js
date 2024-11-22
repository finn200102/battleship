import { createShip } from "./Ship";

export const createGameboard = (rows, cols) => {
  let board = Array.from({ length: rows }, () => new Array(cols).fill(0));
  const getBoard = () => {
    return board;
  };
  const placeShip = (startRow, startCol, endRow, endCol) => {
    const length =
      Math.abs(endRow - startRow) + Math.abs(endCol - startCol) + 1;
    const ship = createShip(length);
    if (startRow == endRow) {
      // Horizontal placement
      const minCol = Math.min(startCol, endCol);
      const maxCol = Math.max(startCol, endCol);
      for (let col = minCol; col <= maxCol; col++) {
        board[startRow][col] = ship;
      }
    } else if (startCol == endCol) {
      // Vertical placement
      const minRow = Math.min(startRow, endRow);
      const maxRow = Math.max(startRow, endRow);
      for (let row = minRow; row <= maxRow; row++) {
        board[row][startCol] = ship;
      }
    }
  };
  const receiveAttack = (row, col) => {
    if (board[row][col] != 0) {
      board[row][col].hit();
    } else {
      // missed attack
      board[row][col] = "X";
    }
  };
  const allSunk = () => {};
  return {
    placeShip,
    getBoard,
    receiveAttack,
    allSunk,
  };
};
