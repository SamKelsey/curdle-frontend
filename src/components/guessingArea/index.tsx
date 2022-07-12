import React from "react";
import "./styles.scss";

import { IGuessUpdate } from "../../types/board";

interface IProps {
  updateGuess: (newGuess: IGuessUpdate) => void;
  submitGuess: () => void;
}

const GuessingArea = ({ updateGuess, submitGuess }: IProps) => {
  return (
    <>
      <div>GuessingArea</div>
      <button type="submit" onClick={() => submitGuess()}>
        Submit Guess
      </button>
    </>
  );
};

export default GuessingArea;
