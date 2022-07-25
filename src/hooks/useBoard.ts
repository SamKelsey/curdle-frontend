import { useReducer, useEffect } from "react";
import { Store } from "react-notifications-component";

import { initialState, reducer } from "../reducers/board.reducer";
import { fetchPlayerData, postGuess } from "../services/wordApi";
import { getColoursDistance } from "../services/colourUtils";
import { UPDATE_CURRENT_GUESS, UPDATE_BOARD } from "../reducers/board.actions";

import { IGuess, IGuessUpdate } from "../types/board";

export const useBoard = () => {
  const [board, boardDispatch] = useReducer(reducer, initialState);
  const MIN_ALLOWABLE_COLOUR_DISTANCE = 100;

  useEffect(() => {
    const initialiseBoard = async () => {
      const res = await fetchPlayerData();
      boardDispatch({ type: UPDATE_BOARD, payload: res });
    };

    initialiseBoard();
  }, []);

  const updateGuess = (newGuess: IGuessUpdate) => {
    newGuess.isValid = !coloursAreTooClose({
      ...board.guesses[board.currentGuess],
      ...newGuess,
    });

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

  const validSubmission = (guess: IGuess) => {
    if (!guess.isValid) {
      Store.addNotification({
        container: "top-full",
        type: "danger",
        title: "Invalid guess",
        message:
          "Your colours are too similar. Try picking colours that are more different.",
        dismiss: { duration: 3000 },
      });

      return false;
    }

    return true;
  };

  return {
    board,
    updateGuess,
    submitGuess,
  } as const;
};
