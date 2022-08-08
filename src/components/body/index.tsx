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
  const [isGameOver, setIsGameOver] = useState(false);

  // TODO: Gameover modal should pop up as soon as out of lives (not only after refresh).
  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (board.guesses.length === 0) {
      setInstructionsActive(true);
    } else if (board.gameStatus === "WON" || board.gameStatus === "LOST") {
      setIsGameOver(true);
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

  const gameOverModal = () => {
    return (
      <CurdleModal classNames="game-over" open={isGameOver}>
        <h3>You {board.gameStatus.toLowerCase()}!</h3>
        <p>{renderGameOverMessage()}</p>
        <h4>Your score</h4>
        <h5>{board.bestGuess?.accuracy}%</h5>
        <div className="level-bar">
          <div></div>
        </div>
      </CurdleModal>
    );
  };

  const renderGameOverMessage = () => {
    switch (board.gameStatus) {
      case "WON":
        return "You must be very proud of yourself, big pat on the back now.";
      case "LOST":
        return "I imagine you are probably full of shame right now. Pathetic.";
      default:
        return "";
    }
  };

  return (
    <div className="body">
      {!isLoading && (
        <>
          <h3>Target colour</h3>
          {gameInstructions()}
          {gameOverModal()}
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
