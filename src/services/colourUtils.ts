import { IColor } from "../types/board";

export const getColoursDistance = (c1: IColor, c2: IColor): number => {
  return 100;
};

export const hexToColour = (hex: string): IColor => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        red: parseInt(result[1], 16),
        green: parseInt(result[2], 16),
        blue: parseInt(result[3], 16),
      }
    : null;
};

export const colourToHex = (col: IColor): string => {
  return (
    "#" +
    componentToHex(col.red) +
    componentToHex(col.green) +
    componentToHex(col.blue)
  );
};

function componentToHex(col: number) {
  var hex = col.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
