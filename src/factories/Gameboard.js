import { createShip } from "./Ship";

export const createGameboard = (rows, cols) => {
  let board = Array.from({ length: rows }, () => new Array(cols).fill(0));
  let selectedRow = 0;
  let selectedCol = 0;
  const getBoard = () => {
    return board;
  };
  const selectField = (row, col) => {
    selectedCol = col;
    selectedRow = row;
  };
  const selectedField = () => {
    return selectedRow, selectedCol;
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
      if (board[row][col].isSunk()) {
        board[row][col] = "s";
      }
    } else {
      // missed attack
      board[row][col] = "X";
    }
  };
  const isValidMove = (row, col) => {
    if (board[row][col] == "X" || board[row][col] == "s") {
      return false;
    } else {
      return true;
    }
  };
  const allSunk = () => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; i++) {
        if (board[i][j] != 0 || board[i][j] != "X" || board[i][j] != "s") {
        } else {
          return false;
        }
        return true;
      }
    }
  };
  return {
    placeShip,
    getBoard,
    receiveAttack,
    allSunk,
    isValidMove,
    selectField,
    selectedField,
  };
};
