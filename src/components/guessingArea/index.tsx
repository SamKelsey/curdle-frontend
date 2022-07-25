import React from "react";
import { Store } from "react-notifications-component";
import "./styles.scss";

import { IBoard, IGuessUpdate } from "../../types/board";

import ColourInput from "./colourInput";

interface IProps {
  updateGuess: (newGuess: IGuessUpdate) => void;
  submitGuess: () => void;
  board: IBoard;
}

const GuessingArea = ({ updateGuess, submitGuess, board }: IProps) => {
  return (
    <div className="guessing-area">
      <div className="colour-inputs">
        <ColourInput inputNum={1} updateGuess={updateGuess} board={board} />
        <ColourInput inputNum={2} updateGuess={updateGuess} board={board} />
      </div>
      <button type="submit" onClick={() => submitGuess()}>
        Submit Guess
      </button>
    </div>
  );
};

export default GuessingArea;
