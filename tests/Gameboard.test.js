import { experiments } from "webpack";
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
  test("recieve attack missed ship", () => {
    const board = createGameboard(2, 2);
    board.receiveAttack(0, 0);
    const boardState = board.getBoard();
    expect(boardState).toEqual([
      ["X", 0],
      [0, 0],
    ]);
  });
  test("all ships destroyed", () => {
    const board = createGameboard(2, 2);
    board.placeShip(0, 0, 0, 0);
    board.receiveAttack(0, 0);
    const boardState = board.getBoard();
    expect(boardState).toEqual([
      ["s", 0],
      [0, 0],
    ]);
    expect(board.allSunk()).toBe(true);
  });
  test("is Valid Move", () => {
    const board = createGameboard(2, 2);
    board.placeShip(0, 0, 0, 0);
    board.receiveAttack(1, 1);
    const valid = board.isValidMove(0, 0);
    expect(valid).toBe(true);
  });
  test("selectField, selectedFiled", () => {
    const board = createGameboard(2, 2);
    board.placeShip(0, 0, 0, 0);
    board.selectField(0, 0);
    const selected = board.selectedField();
    expect(selected).toBe(0, 0);
  });
});
