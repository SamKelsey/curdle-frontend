import React, { useEffect } from "react";
import "./styles.scss";

import Board from "../board";
import ColourSample from "../colourSample";
import GuessesDisplay from "../guessesDisplay";
import GuessingArea from "../guessingArea";

import { useBoard } from "../../hooks/useBoard";

const Body = () => {
  const { board, submitGuess, updateGuess } = useBoard();

  useEffect(() => {
    if (board.gameStatus === "WON") {
      alert("Congratulations! You won!");
    } else if (board.gameStatus === "LOST") {
      alert("Sorry, you lost. Out of lives...");
    }
  }, [board.gameStatus]);

  return (
    <div className="body">
      <h3>Target colour</h3>
      <ColourSample customClasses="target-colour" {...board.targetColour} />
      {/* <Board
        board={board}
        submitGuess={submitGuess}
        updateGuess={updateGuess}
      /> */}
      <GuessesDisplay board={board} />
      {board.gameStatus == "PLAYING" && (
        <GuessingArea
          updateGuess={updateGuess}
          submitGuess={submitGuess}
          board={board}
        />
      )}
    </div>
  );
};

export default Body;
