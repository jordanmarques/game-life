import "./styles.css";
import mapDrawer from "./map-drawer";
import mapConverter from "./map-convert";
import lifeGame from "./life-game";
import utils from "./utils";

const canvasContext = mapDrawer.init2DCanavas("canvas");

const initialMap = [
  ["", "X", "", "X", "", "", "", "", "X", ""],
  ["X", "", "X", "", "X", "", "X", "", "", ""],
  ["", "X", "", "X", "", "X", "", "", "X", ""],
  ["", "", "X", "", "X", "", "X", "", "", "X"],
  ["X", "", "", "X", "", "", "", "", "X", ""],
  ["", "", "X", "", "X", "", "", "X", "", "X"],
  ["", "X", "", "X", "", "X", "", "X", "", "X"],
  ["X", "", "", "X", "", "", "X", "", "X", ""],
  ["", "", "X", "", "X", "X", "", "", "", ""],
  ["", "X", "", "X", "", "", "X", "", "X", ""]
];

async function startGame(ctx, map) {
  mapDrawer.drawMapWithContext(ctx, map);
  await utils.sleep(500);
  const newMap = lifeGame.generateNextRoundMap(map);
  return startGame(ctx, newMap);
}

const cellMap = mapConverter.convertInitialMapToCellArray(initialMap);
//startGame(canvasContext, cellMap);
