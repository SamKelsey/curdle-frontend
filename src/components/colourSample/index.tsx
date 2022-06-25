import { number } from "prop-types";
import React from "react";
import "./styles.scss";

interface IProps {
  red: number;
  green: number;
  blue: number;
  accuracy?: number;
}

const ColourSample = ({ red, green, blue, accuracy }: IProps) => {
  return (
    <div
      className="colour-sample"
      style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
    >
      {accuracy ? `${accuracy}%` : null}
    </div>
  );
};

export default ColourSample;
