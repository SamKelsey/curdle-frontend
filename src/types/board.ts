export interface IGuess {
  red: number;
  green: number;
  blue: number;
  accuracy: number;
}

export interface IBoard {
  guesses: IGuess[];
  currentGuess: number;
  gameStatus: string;
  bestGuess: IGuess;
}
