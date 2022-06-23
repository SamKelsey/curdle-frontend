import { useReducer, useEffect } from "react";

import { initialState, reducer } from "../reducers/board.reducer";
import { fetchPlayerData, postGuess } from "../services/wordApi";
import { UPDATE_CURRENT_GUESS, UPDATE_BOARD } from "../reducers/board.actions";

import { IColor, IGuess, IGuessUpdate } from "../types/board";

export const useBoard = () => {
  const [board, boardDispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialiseBoard = async () => {
      const res = await fetchPlayerData();
      console.log(res);
      boardDispatch({ type: UPDATE_BOARD, payload: res });
    };

    initialiseBoard();
  }, []);

  const updateGuess = (newGuess: IGuessUpdate) => {
    if (!validUpdate(newGuess)) {
      return;
    }

    boardDispatch({
      type: UPDATE_CURRENT_GUESS,
      payload: newGuess,
    });
    console.log(board.guesses);
  };

  const submitGuess = async () => {
    const guess = board.guesses[board.currentGuess];

    if (!validSubmission(guess)) {
      return;
    }

    const res = await postGuess(JSON.stringify(guess));
    boardDispatch({ type: UPDATE_BOARD, payload: res });
  };

  // TODO: Check valid colour
  const validUpdate = (guess: IGuessUpdate) => {
    return true;
  };

  // TODO: Check rgb vals are within 0 -> 255 range.
  const validSubmission = (guess: IGuess) => {
    return true;
  };

  return {
    board,
    updateGuess,
    submitGuess,
  } as const;
};
