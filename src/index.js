import "./style.css";
import { gameController } from "./modules/gameController";

const startButton = document.getElementById("start-button");

startButton.addEventListener("click", () => {
  gameController.gameLoop();
});
