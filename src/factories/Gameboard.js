export const createGameboard = (rows, cols) => {
  const board = Array.from({ length: rows }, () => new Array(cols).fill(0));
  const getBoard = () => {
    return board;
  };
  const placeShip = () => {};
  const receiveAttack = () => {};
  const allSunk = () => {};
  return {
    placeShip,
    getBoard,
    receiveAttack,
    allSunk,
  };
};
