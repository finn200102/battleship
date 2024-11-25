import { createPlayer } from "../src/factories/Player";

describe("createPlayer", () => {
  test("createGameboard", () => {
    const player = createPlayer();
    expect(player.gameboard.getBoard()).toStrictEqual([
      [0, 0],
      [0, 0],
    ]);
  });
});
