import { createPlayer } from "../src/factories/Player";

describe("createPlayer", () => {
  test("createGameboard", () => {
    const player = createPlayer(2, 2);
    expect(player.gameboard.getBoard()).toStrictEqual([
      [0, 0],
      [0, 0],
    ]);
  });
});
