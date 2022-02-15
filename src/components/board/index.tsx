import * as React from "react";
import "./styles.css";

import Row from "./row";

const Board = () => {
  return (
    <div className="board">
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
    </div>
  );
};

export default Board;