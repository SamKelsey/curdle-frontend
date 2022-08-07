import { useReducer, useEffect, useState } from "react";
import { Store } from "react-notifications-component";

import { initialState, reducer } from "../reducers/board.reducer";
import { fetchPlayerData, postGuess } from "../services/wordApi";
import { getColoursDistance } from "../services/colourUtils";
import { UPDATE_CURRENT_GUESS, UPDATE_BOARD } from "../reducers/board.actions";
import { DEFAULT_GUESS } from "../parameters";

import { IGuessUpdate } from "../types/board";

const MIN_ALLOWABLE_COLOUR_DISTANCE = 100;

export const useBoard = () => {
  const [board, boardDispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initialiseBoard = async () => {
      setIsLoading(true);
      const res = await fetchPlayerData();
      boardDispatch({ type: UPDATE_BOARD, payload: res });
      setIsLoading(false);
    };

    initialiseBoard();
  }, []);

  const updateGuess = (newGuess: IGuessUpdate) => {
    newGuess.isValid = !coloursAreTooClose({
      ...(board.guesses[board.currentGuess] || DEFAULT_GUESS),
      ...newGuess,
    });

    boardDispatch({
      type: UPDATE_CURRENT_GUESS,
      payload: newGuess,
    });
  };

  const submitGuess = async () => {
    const guess = board.guesses[board.currentGuess];

    if (!guess.isValid) {
      Store.addNotification({
        container: "top-full",
        type: "danger",
        title: "Invalid guess",
        message:
          "Your colours are too similar. Try picking colours that are more different.",
        dismiss: { duration: 3000 },
      });

      return;
    }

    const res = await postGuess(guess);
    boardDispatch({ type: UPDATE_BOARD, payload: res });
  };

  const coloursAreTooClose = (guess: IGuessUpdate): boolean => {
    console.log(guess);
    return getColoursDistance(guess) < MIN_ALLOWABLE_COLOUR_DISTANCE;
  };

  return {
    board,
    updateGuess,
    submitGuess,
    isLoading,
  } as const;
};
