export const createShip = (shipLength) => {
  const length = shipLength;
  const getLength = () => {
    return length;
  };
  const getNumberOfHits = () => {};
  const getShipStatus = () => {};
  const hit = () => {};
  const isSunk = () => {};

  return { getLength, getNumberOfHits, getShipStatus, hit, isSunk };
};
