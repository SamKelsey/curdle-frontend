import { IBoard } from "../types/board";
import { UPDATE_CURRENT_GUESS, UPDATE_BOARD } from "./board.actions";

interface IAction {
  type: string;
  payload: any;
}

export const initialState: IBoard = {
  guesses: [],
  currentGuess: 0,
  gameStatus: "PLAYING",
  bestGuess: null,
};

export function reducer(state: IBoard, action: IAction): IBoard {
  switch (action.type) {
    case UPDATE_BOARD:
      return {
        ...state,
        gameStatus: action.payload.gameStatus,
        currentGuess: 5 - action.payload.lives,
        guesses: action.payload.guesses,
        bestGuess: action.payload.bestGuess,
      };
    case UPDATE_CURRENT_GUESS:
      return {
        ...state,
        guesses: state.guesses.map((guess, i) =>
          i === state.currentGuess ? { ...guess, ...action.payload } : guess
        ),
      };
    default:
      throw new Error(`${action.type} action type does not exist.`);
  }
}
