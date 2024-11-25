import { displayGameboard } from "../src/modules/displayController";
import { createGameboard } from "../src/factories/Gameboard";

describe("displayGameboard", () => {
  beforeEach(() => {
    // Clear DOM between tests
    document.body.innerHTML = "";
  });

  test("render 2x2 gameboard with 4 cells", () => {
    const gameBoard = createGameboard(2, 2);
    displayGameboard.render(gameBoard.getBoard());
    const fields = document.querySelectorAll(".gameboard-field");
    expect(fields.length).toBe(4);
  });
});
