import React from "react";
import "./styles.scss";

import { IBoard } from "../../types/board";
import { colourToHex } from "../../services/colourUtils";

interface IProps {
  board: IBoard;
}

const GuessesDisplay = ({ board }: IProps) => {
  return (
    <div className="guesses-display">
      <h4>Guesses</h4>
      {board.guesses.map(
        (guess, i) =>
          guess.accuracy && (
            <div className="guess" key={i}>
              <div
                className="guess-result"
                style={{ backgroundColor: colourToHex(guess.resultColour) }}
              >
                {guess.accuracy}%
              </div>
              <div className="guess-inputs">
                <div
                  className="guess-input"
                  style={{ backgroundColor: colourToHex(guess.colour1) }}
                ></div>
                <div
                  className="guess-input"
                  style={{ backgroundColor: colourToHex(guess.colour2) }}
                ></div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default GuessesDisplay;
