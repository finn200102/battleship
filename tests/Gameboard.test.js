import { createGameboard } from "../src/factories/Gameboard";
import { createShip } from "../src/factories/Ship";

describe("createShip", () => {
  test("create board", () => {
    const board = createGameboard(2, 2);
    expect(board.getBoard()).toStrictEqual([
      [0, 0],
      [0, 0],
    ]);
  });
  test("place one ship", () => {
    const board = createGameboard(2, 2);
    board.placeShip(0, 0, 0, 1);
    const boardState = board.getBoard();
    const placedShip = boardState[0][0]; // Get reference to the placed ship

    expect(boardState).toEqual([
      [placedShip, placedShip], // Use the same reference
      [0, 0],
    ]);
  });
  test("recieve attack one ship", () => {
    const board = createGameboard(2, 2);
    board.placeShip(0, 0, 0, 1);
    const boardState = board.getBoard();
    board.receiveAttack(0, 0);
    const placedShip = boardState[0][0]; // Get reference to the placed ship
    expect(placedShip.getNumberOfHits()).toBe(1);
  });
});
