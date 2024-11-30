export const createShip = (shipLength) => {
  const length = shipLength;
  let numberOfHits = 0;
  const isShip = true;
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
  const isSunk = () => {
    if (numberOfHits >= shipLength) {
      return true;
    } else {
      return false;
    }
  };

  return { getLength, getNumberOfHits, getShipStatus, hit, isSunk, isShip };
};
