import React from "react";
import "./styles.scss";

import { IGuess } from "../../../types/board";

interface IProps {
  guess: IGuess;
  updateGuess: (newGuess: string[]) => void;
  submitGuess: () => void;
  isActive: boolean;
}

const Row = ({ guess, updateGuess, submitGuess, isActive }: IProps) => {
  return (
    <div className="row">
      <input type="color" />
      <input type="color" />
    </div>
  );
};

export default Row;
