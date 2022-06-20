interface IColor {
  red: number;
  green: number;
  blue: number;
}

export interface IGuess {
  colour1: IColor;
  colour2: IColor;
  resultColour?: IColor;
  accuracy?: number;
}

export interface IBoard {
  guesses: IGuess[];
  currentGuess: number;
  gameStatus: string;
  bestGuess: IGuess;
}
