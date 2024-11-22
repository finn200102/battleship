import { createShip } from "../src/factories/Ship";

describe("createShip", () => {
  test("initialize with length of three", () => {
    const ship = createShip(3);
    expect(ship.getLength()).toBe(3);
  });
  test("number of hits", () => {
    const ship = createShip(3);
    expect(ship.getNumberOfHits()).toBe(0);
  });
  test("add one hit", () => {
    const ship = createShip(3);
    ship.hit();
    expect(ship.getNumberOfHits()).toBe(1);
  });
  test("isSunk", () => {
    const ship = createShip(3);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
