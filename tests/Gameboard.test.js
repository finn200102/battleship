import { createGameboard } from "../src/factories/Gameboard";

describe("createShip", () => {
  test("create board", () => {
    const board = createGameboard(2, 2);
    expect(board.getBoard()).toStrictEqual([
      [0, 0],
      [0, 0],
    ]);
  });
});
