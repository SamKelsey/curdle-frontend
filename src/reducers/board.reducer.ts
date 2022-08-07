import { IBoard } from "../types/board";
import { UPDATE_CURRENT_GUESS, UPDATE_BOARD } from "./board.actions";

import { IGuess } from "../types/board";

interface IAction {
  type: string;
  payload: any;
}

export const initialState: IBoard = {
  guesses: [],
  currentGuess: 0,
  gameStatus: "PLAYING",
  bestGuess: null,
  targetColour: null,
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
        targetColour: action.payload.targetColour,
      };
    case UPDATE_CURRENT_GUESS:
      const newGuess: IGuess = {
        ...state.guesses[state.currentGuess],
        ...action.payload,
      };
      state.guesses[state.currentGuess] = newGuess;

      return {
        ...state,
        guesses: state.guesses,
      };
    default:
      throw new Error(`${action.type} action type does not exist.`);
  }
}
