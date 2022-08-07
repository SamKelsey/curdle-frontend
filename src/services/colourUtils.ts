import { IColor, IGuessUpdate } from "../types/board";

export const getColoursDistance = (guess: IGuessUpdate): number => {
  const r = guess.colour2.red - guess.colour1.red;
  const g = guess.colour2.green - guess.colour1.green;
  const b = guess.colour2.blue - guess.colour1.blue;

  return Math.sqrt(Math.pow(r, 2) + Math.pow(g, 2) + Math.pow(b, 2));
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
