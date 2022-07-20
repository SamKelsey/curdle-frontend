import React, { useState } from "react";
import "./styles.scss";

import { IGuessUpdate } from "../../types/board";

interface IProps {
  updateGuess: (newGuess: IGuessUpdate) => void;
  submitGuess: () => void;
}

const GuessingArea = ({ updateGuess, submitGuess }: IProps) => {
  const [col1, setCol1] = useState("#FFFFFF");
  return (
    <div className="guessing-area">
      <div className="colour-inputs">
        <div className="colour-input">
          <input
            type="color"
            value={col1}
            onChange={(e) => setCol1(e.target.value)}
          />
          <div className="empty-div" style={{ backgroundColor: col1 }}></div>
        </div>
        <div className="colour-input">
          <input type="color" value="#FFFFFF" />
          <div></div>
        </div>
      </div>
      <button type="submit" onClick={() => submitGuess()}>
        Submit Guess
      </button>
    </div>
  );
};

export default GuessingArea;
