import * as React from "react";
import "./styles.scss";

import Row from "./row";

import { IBoard, IGuess, IGuessUpdate } from "../../types/board";

interface IProps {
  board: IBoard;
  updateGuess: (s: IGuessUpdate) => void;
  submitGuess: () => void;
}

const TOTAL_GUESSES = 5;
const DEFAULT_GUESS: IGuess = {
  colour1: {
    red: 0,
    green: 0,
    blue: 0,
  },
  colour2: {
    red: 0,
    green: 0,
    blue: 0,
  },
};

const Board = ({
  board: { guesses, currentGuess },
  updateGuess,
  submitGuess,
}: IProps) => {
  return (
    <div className="board">
      {Array(TOTAL_GUESSES)
        .fill(0)
        .map((_, i) => (
          <Row
            key={i}
            guess={guesses.length > i ? guesses[i] : DEFAULT_GUESS}
            updateGuess={updateGuess}
            submitGuess={submitGuess}
            isActive={currentGuess == i}
          />
        ))}
    </div>
  );
};

export default Board;
