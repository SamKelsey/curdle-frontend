import React from "react";
import "./styles.scss";

import { hexToColour, colourToHex } from "../../../services/colourUtils";
import ColourSample from "../../colourSample";

import { IGuess, IGuessUpdate } from "../../../types/board";

interface IProps {
  guess: IGuess;
  updateGuess: (newGuess: IGuessUpdate) => void;
  submitGuess: () => void;
  isActive: boolean;
}

const Row = ({ guess, updateGuess, isActive }: IProps) => {
  return (
    <div className={`row ${guess.isValid == false ? "invalid" : ""}`}>
      <input
        type="color"
        disabled={!isActive}
        value={colourToHex(guess.colour1)}
        onChange={(e) => updateGuess({ colour1: hexToColour(e.target.value) })}
      />
      <input
        type="color"
        disabled={!isActive}
        value={colourToHex(guess.colour2)}
        onChange={(e) => updateGuess({ colour2: hexToColour(e.target.value) })}
      />
      <h3>=</h3>
      <ColourSample
        {...guess.resultColour}
        accuracy={guess.accuracy}
        customClasses="guess-result"
      />
    </div>
  );
};

export default Row;
