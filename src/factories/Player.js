import { createGameboard } from "./Gameboard";

export const createPlayer = () => {
  const gameboard = createGameboard(2, 2);
  return {
    gameboard,
  };
};
