import React from "react";
import "./styles.scss";

import { IBoard, IGuessUpdate } from "../../types/board";

import { hexToColour, colourToHex } from "../../services/colourUtils";

interface IProps {
  updateGuess: (newGuess: IGuessUpdate) => void;
  submitGuess: () => void;
  board: IBoard;
}

const GuessingArea = ({ updateGuess, submitGuess, board }: IProps) => {
  console.log(board);
  return (
    <div className="guessing-area">
      <div className="colour-inputs">
        <div className="colour-input">
          <input
            type="color"
            onChange={(e) =>
              updateGuess({ colour1: hexToColour(e.target.value) })
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
        <div className="colour-input">
          <input
            type="color"
            onChange={(e) =>
              updateGuess({ colour2: hexToColour(e.target.value) })
            }
          />
          <div
            className="empty-div"
            style={{
              backgroundColor: colourToHex(
                board.guesses[board.currentGuess].colour2
              ),
            }}
          ></div>
        </div>
      </div>
      <button type="submit" onClick={() => submitGuess()}>
        Submit Guess
      </button>
    </div>
  );
};

export default GuessingArea;
