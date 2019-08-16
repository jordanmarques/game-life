import { status } from "./constants";

const mapConverter = {};

mapConverter.convertInitialMapToCellArray = initialMap => {
  return initialMap.map(row =>
    row.map(item => (item === "X" ? status.ALIVE : status.DEAD))
  );
};

export default mapConverter;
