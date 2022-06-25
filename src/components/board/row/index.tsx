import React, { useState } from "react";
import "./styles.scss";

import { hexToColour, colourToHex } from "../../../services/utils";
import ColourSample from "../../colourSample";

import { IGuess, IGuessUpdate, IColor } from "../../../types/board";

interface IProps {
  guess: IGuess;
  updateGuess: (newGuess: IGuessUpdate) => void;
  submitGuess: () => void;
  isActive: boolean;
}

const Row = ({ guess, updateGuess, submitGuess, isActive }: IProps) => {
  return (
    <div className="row">
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
      <ColourSample {...guess.resultColour} />
    </div>
  );
};

export default Row;
