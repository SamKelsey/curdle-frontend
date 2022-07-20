import React from "react";
import "./styles.scss";

import { IBoard, IGuessUpdate } from "../../../types/board";

import { hexToColour, colourToHex } from "../../../services/colourUtils";

interface IProps {
  updateGuess: (newGuess: IGuessUpdate) => void;
  board: IBoard;
  inputNum: 1 | 2;
}

const ColourInput = ({ updateGuess, board, inputNum }: IProps) => {
  return (
    <div className="colour-input">
      <input
        type="color"
        onChange={(e) =>
          updateGuess({ [`colour${inputNum}`]: hexToColour(e.target.value) })
        }
      />
      <div
        className="empty-div"
        style={{
          backgroundColor: colourToHex(
            board.guesses[board.currentGuess].colour1
          ),
        }}
      ></div>
    </div>
  );
};

export default ColourInput;