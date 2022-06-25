import * as React from "react";
import "./styles.scss";

import Row from "./row";

import { IBoard, IGuess, IGuessUpdate } from "../../types/board";

interface IProps {
  board: IBoard;
  updateGuess: (s: IGuessUpdate) => void;
  submitGuess: () => void;
}

// Causing issues because the passed colour isn't actually in the state.
const Board = ({
  board: { guesses, currentGuess },
  updateGuess,
  submitGuess,
}: IProps) => {
  return (
    <div className="board">
      {guesses.map((_, i) => (
        <Row
          key={i}
          guess={guesses[i]}
          updateGuess={updateGuess}
          submitGuess={submitGuess}
          isActive={currentGuess == i}
        />
      ))}
    </div>
  );
};

export default Board;
