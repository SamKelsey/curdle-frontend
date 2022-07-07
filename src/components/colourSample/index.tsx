import { number } from "prop-types";
import React from "react";
import "./styles.scss";

interface IProps {
  red: number;
  green: number;
  blue: number;
  accuracy?: number;
  customClasses?: string;
}

const ColourSample = ({
  red,
  green,
  blue,
  accuracy,
  customClasses,
}: IProps) => {
  return (
    <div
      className={`colour-sample ${customClasses}`}
      style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
    >
      {accuracy ? `${accuracy}%` : null}
    </div>
  );
};

export default ColourSample;
