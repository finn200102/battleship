import { createShip } from "../src/factories/Ship";

describe("createShip", () => {
  test("initialize with length of three", () => {
    const ship = createShip(3);
    expect(ship.getLength()).toBe(3);
  });
});
