import { IBoard } from "../types/board";
import { UPDATE_CURRENT_GUESS, UPDATE_BOARD } from "./board.actions";

import { IGuess } from "../types/board";
import { DEFAULT_GUESS, DEFAULT_COLOUR, TOTAL_GUESSES } from "../parameters";

interface IAction {
  type: string;
  payload: any;
}

export const initialState: IBoard = {
  guesses: Array(TOTAL_GUESSES).fill(DEFAULT_GUESS),
  currentGuess: 0,
  gameStatus: "PLAYING",
  bestGuess: null,
  targetColour: DEFAULT_COLOUR,
};

export function reducer(state: IBoard, action: IAction): IBoard {
  switch (action.type) {
    case UPDATE_BOARD:
      const newGuesses = action.payload.guesses;
      for (let i = action.payload.guesses.length; i < TOTAL_GUESSES; i++) {
        newGuesses.push(DEFAULT_GUESS);
      }

      return {
        ...state,
        gameStatus: action.payload.gameStatus,
        currentGuess: 5 - action.payload.lives,
        guesses: newGuesses,
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
