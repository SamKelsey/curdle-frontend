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

const DEFAULT_COLOUR: IColor = {
  red: 255,
  green: 255,
  blue: 255,
};

const Row = ({ guess, updateGuess, submitGuess, isActive }: IProps) => {
  return (
    <div className="row">
      <input
        type="color"
        disabled={!isActive}
        value={colourToHex(guess.colour1 ? guess.colour1 : DEFAULT_COLOUR)}
        onChange={(e) => updateGuess({ colour1: hexToColour(e.target.value) })}
      />
      <input
        type="color"
        disabled={!isActive}
        value={colourToHex(guess.colour2 ? guess.colour2 : DEFAULT_COLOUR)}
        onChange={(e) => updateGuess({ colour2: hexToColour(e.target.value) })}
      />
      <h3>=</h3>
      {guess.resultColour ? (
        <ColourSample
          red={guess.resultColour.red}
          green={guess.resultColour.green}
          blue={guess.resultColour.blue}
        />
      ) : (
        <ColourSample {...DEFAULT_COLOUR} />
      )}
    </div>
  );
};

export default Row;
