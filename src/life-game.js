import { status } from "./constants";

const lifeGame = {};

lifeGame.generateNextRoundMap = cellArray => {
  return cellArray.map((row, x) =>
    row.map((cell, y) => {
      const cellsAliveArround = numberOfAliveCellsArround(
        { x: x, y: y },
        cellArray
      );
      return getNewCellInFunctionsOfArroundCellsAndCurrentCellStatus(
        cellsAliveArround,
        cell
      );
    })
  );
};

const getNewCellInFunctionsOfArroundCellsAndCurrentCellStatus = (
  aliveCellsArround,
  cell
) => {
  if (aliveCellsArround === 3) {
    return status.ALIVE;
  } else if (aliveCellsArround < 2 || aliveCellsArround > 3) {
    return status.DEAD;
  } else if (aliveCellsArround === 2) {
    return cell;
  } else {
    console.log("Not Handle", aliveCellsArround, cell);
  }
};

const numberOfAliveCellsArround = (cellPositions, cellArray) => {
  const positionsToCheck = [
    pos => isCellAtThisPositionAlive({ x: pos.x - 1, y: pos.y + 1 }, cellArray),
    pos => isCellAtThisPositionAlive({ x: pos.x, y: pos.y + 1 }, cellArray),
    pos => isCellAtThisPositionAlive({ x: pos.x + 1, y: pos.y + 1 }, cellArray),
    pos => isCellAtThisPositionAlive({ x: pos.x - 1, y: pos.y }, cellArray),
    pos => isCellAtThisPositionAlive({ x: pos.x + 1, y: pos.y }, cellArray),
    pos => isCellAtThisPositionAlive({ x: pos.x - 1, y: pos.y - 1 }, cellArray),
    pos => isCellAtThisPositionAlive({ x: pos.x, y: pos.y - 1 }, cellArray),
    pos => isCellAtThisPositionAlive({ x: pos.x + 1, y: pos.y - 1 }, cellArray)
  ];

  return positionsToCheck.reduce(
    (acc, curr) => (curr(cellPositions) ? acc + 1 : acc),
    0
  );
};

const isCellAtThisPositionAlive = (positions, cellArray) => {
  const { x, y } = positions;
  if (cellArray[x] && cellArray[x][y]) {
    return cellArray[x][y] === status.ALIVE;
  }
  return false;
};

export default lifeGame;
