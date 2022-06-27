export interface IColor {
  red: number;
  green: number;
  blue: number;
}

export interface IGuessUpdate {
  colour1?: IColor;
  colour2?: IColor;
  isValid?: boolean;
}

export interface IGuess {
  colour1: IColor;
  colour2: IColor;
  resultColour?: IColor;
  accuracy?: number;
  isValid?: boolean;
}

export interface IBoard {
  guesses: IGuess[];
  currentGuess: number;
  gameStatus: string;
  bestGuess: IGuess;
  targetColour: IColor;
}
