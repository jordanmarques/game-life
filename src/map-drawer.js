import { bloc, grid, status } from "./constants";

const mapDrawer = {};

CanvasRenderingContext2D.prototype.fillSquare = function(x, y, height, color) {
  this.fillStyle = color;
  this.fillRect(x, y, height, height);
};

mapDrawer.init2DCanavas = id => {
  const canvas = document.getElementById(id);
  canvas.width = bloc.size * grid.height;
  canvas.height = bloc.size * grid.height;
  canvas.style.width = `${bloc.size * grid.height}px`;
  canvas.style.height = `${bloc.size * grid.height}px`;
  return canvas.getContext("2d");
};

mapDrawer.drawMapWithContext = (ctx, initialMap) => {
  clearMap(ctx, initialMap);

  initialMap.forEach((row, i) => {
    row.forEach((element, y) => {
      if (element === status.ALIVE) {
        drawSquareWithContext(ctx, y, i);
      }
    });
  });
};

const clearMap = (ctx, map) => {
  map.forEach((row, i) => {
    row.forEach((elem, y) => {
      clearCase(ctx, y, i);
    });
  });
};

const clearCase = (context, x, y) => {
  context.fillSquare(
    x * bloc.size,
    y * bloc.size,
    bloc.size,
    "rgb(255, 255, 255)"
  );
};

const drawSquareWithContext = (context, x, y) => {
  context.fillSquare(x * bloc.size, y * bloc.size, bloc.size, "rgb(200, 0, 0)");
};

export default mapDrawer;
