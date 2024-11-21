export const createShip = (shipLength) => {
  const length = shipLength;
  let numberOfHits = 0;
  const getLength = () => {
    return length;
  };
  const getNumberOfHits = () => {
    return numberOfHits;
  };
  const getShipStatus = () => {};
  const hit = () => {
    numberOfHits += 1;
  };
  const isSunk = () => {};

  return { getLength, getNumberOfHits, getShipStatus, hit, isSunk };
};
