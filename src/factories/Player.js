import { createGameboard } from "./Gameboard";

export const createPlayer = (row, col) => {
  const gameboard = createGameboard(row, col);
  return {
    gameboard,
  };
};
