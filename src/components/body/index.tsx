import React, { useEffect, useState } from "react";
import "./styles.scss";

import CurdleModal from "../curdleModal";
import ColourSample from "../colourSample";
import GuessesDisplay from "../guessesDisplay";
import GuessingArea from "../guessingArea";

import { useBoard } from "../../hooks/useBoard";

const Body = () => {
  const { board, submitGuess, updateGuess } = useBoard();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (board.gameStatus === "WON") {
      alert("Congratulations! You won!");
    } else if (board.gameStatus === "LOST") {
      alert("Sorry, you lost. Out of lives...");
    }
  }, [board.gameStatus]);

  const renderModal = () => {
    if (board.currentGuess == 0) {
      return (
        <CurdleModal classNames="game-instructions" open={open}>
          <h3>How to play</h3>
          <p>
            It's simple, pick 2 colours to mix to create the target colour.
            <br />
            <br />
            You have 4 lives.
            <br />
            <br />
            Good luck!
          </p>
          <button onClick={() => setOpen(false)}>Play</button>
        </CurdleModal>
      );
    }
  };

  return (
    <div className="body">
      <h3>Target colour</h3>
      {renderModal()}
      <ColourSample customClasses="target-colour" {...board.targetColour} />
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
