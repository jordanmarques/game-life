import "./styles.css";
import mapDrawer from "./map-drawer";
import mapConverter from "./map-convert";
import lifeGame from "./life-game";
import butterfly from "./maps/butterfly"
import utils from "./utils";

const canvasContext = mapDrawer.init2DCanavas("canvas");

async function startGame(ctx, map) {
  mapDrawer.drawMapWithContext(ctx, map);
  await utils.sleep(50);
  const newMap = lifeGame.generateNextRoundMap(map);
  return startGame(ctx, newMap);
}

const cellMap = mapConverter.convertInitialMapToCellArray(butterfly);
mapDrawer.drawMapWithContext(canvasContext, cellMap);
startGame(canvasContext, cellMap);
