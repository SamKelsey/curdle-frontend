import { useReducer, useEffect } from "react";

import { initialState, reducer } from "../reducers/board.reducer";
import { fetchPlayerData, postGuess } from "../services/wordApi";
import { getColoursDistance } from "../services/colourUtils";
import { UPDATE_CURRENT_GUESS, UPDATE_BOARD } from "../reducers/board.actions";

import { IGuess, IGuessUpdate } from "../types/board";

export const useBoard = () => {
  const [board, boardDispatch] = useReducer(reducer, initialState);
  const MIN_ALLOWABLE_COLOUR_DISTANCE = 30;

  useEffect(() => {
    const initialiseBoard = async () => {
      const res = await fetchPlayerData();
      boardDispatch({ type: UPDATE_BOARD, payload: res });
    };

    initialiseBoard();
  }, []);

  const updateGuess = (newGuess: IGuessUpdate) => {
    if (
      coloursAreTooClose({
        ...board.guesses[board.currentGuess],
        ...newGuess,
      })
    ) {
      newGuess.isValid = false;
    }

    boardDispatch({
      type: UPDATE_CURRENT_GUESS,
      payload: newGuess,
    });
  };

  const submitGuess = async () => {
    const guess = board.guesses[board.currentGuess];

    if (!validSubmission(guess)) {
      return;
    }

    const res = await postGuess(guess);
    boardDispatch({ type: UPDATE_BOARD, payload: res });
  };

  const coloursAreTooClose = (guess: IGuessUpdate): boolean => {
    return getColoursDistance(guess) < MIN_ALLOWABLE_COLOUR_DISTANCE;
  };

  // Check rgb vals are within 0 -> 255 range.
  const validSubmission = (guess: IGuess) => {
    const nums: number[] = Object.values(guess);

    return !(Math.max(...nums) > 255 || Math.min(...nums) < 0);
  };

  return {
    board,
    updateGuess,
    submitGuess,
  } as const;
};
