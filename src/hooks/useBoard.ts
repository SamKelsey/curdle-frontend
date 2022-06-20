import { useReducer, useEffect } from "react";

import { initialState, reducer } from "../reducers/board.reducer";
import { fetchPlayerData, postGuess } from "../services/wordApi";
import { UPDATE_CURRENT_GUESS, UPDATE_BOARD } from "../reducers/board.actions";

import { IGuess } from "../types/board";

export const useBoard = () => {
  const WORD_LENGTH: number = 5;
  const [board, boardDispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialiseBoard = async () => {
      const res = await fetchPlayerData();
      console.log(res);
      boardDispatch({ type: UPDATE_BOARD, payload: res });
    };

    initialiseBoard();
  }, []);

  const updateGuess = (newGuess: string[]) => {
    if (!validUpdate(newGuess)) {
      return;
    }

    for (let i = newGuess.length; i < WORD_LENGTH; i++) {
      newGuess.push("");
    }

    boardDispatch({
      type: UPDATE_CURRENT_GUESS,
      payload: { value: newGuess },
    });
  };

  const submitGuess = async () => {
    const guess = board.guesses[board.currentGuess];

    if (!validSubmission(guess)) {
      return;
    }

    const res = await postGuess(JSON.stringify(guess));
    boardDispatch({ type: UPDATE_BOARD, payload: res });
  };

  const validUpdate = (guess: string[]) => {
    return guess.length <= WORD_LENGTH && !guess.includes(" ");
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
