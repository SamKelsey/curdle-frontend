import { IGuess, IColor } from "./types/board";

export const DEFAULT_COLOUR: IColor = {
  red: 255,
  green: 255,
  blue: 255,
};

export const TOTAL_GUESSES = 5;

export const DEFAULT_GUESS: IGuess = {
  colour1: DEFAULT_COLOUR,
  colour2: DEFAULT_COLOUR,
  resultColour: DEFAULT_COLOUR,
};
