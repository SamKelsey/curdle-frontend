import { number } from "prop-types";
import React from "react";
import "./styles.scss";

interface IProps {
  red: number;
  green: number;
  blue: number;
}

const ColourSample = ({ red, green, blue }: IProps) => {
  return (
    <div
      className="colour-sample"
      style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
    ></div>
  );
};

export default ColourSample;
