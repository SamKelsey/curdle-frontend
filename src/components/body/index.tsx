import React, { useEffect, useState } from "react";
import "./styles.scss";

import CurdleModal from "../curdleModal";
import ColourSample from "../colourSample";
import GuessesDisplay from "../guessesDisplay";
import GuessingArea from "../guessingArea";

import { useBoard } from "../../hooks/useBoard";

const Body = () => {
  const { board, submitGuess, updateGuess, isLoading } = useBoard();
  const [instructionsActive, setInstructionsActive] = useState(false);

  useEffect(() => {
    if (!isLoading && board.guesses.length === 0) {
      setInstructionsActive(true);
    }
  }, [isLoading]);

  // TODO: Change to renderModals and use state to choose which modal is active.
  const gameInstructions = () => (
    <CurdleModal classNames="game-instructions" open={instructionsActive}>
      <h3>How to play</h3>
      <p>
        It's simple, pick 2 colours to create the target colour.
        <br />
        <br />
        You have 4 lives.
        <br />
        <br />
        Good luck!
      </p>
      <button onClick={() => setInstructionsActive(false)}>Play</button>
    </CurdleModal>
  );

  return (
    <div className="body">
      {!isLoading && (
        <>
          <h3>Target colour</h3>
          {gameInstructions()}
          <ColourSample customClasses="target-colour" {...board.targetColour} />
          <GuessesDisplay board={board} />
          {board.gameStatus === "PLAYING" && (
            <GuessingArea
              updateGuess={updateGuess}
              submitGuess={submitGuess}
              board={board}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Body;
