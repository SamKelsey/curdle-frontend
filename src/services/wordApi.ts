import axios from "axios";

import { IGuess } from "../types/board";

interface IWordApi {
  gameStatus: string;
  guessIsCorrect: boolean;
  guesses: IGuess[];
  lives: number;
  bestGuess: IGuess;
}

export const fetchPlayerData = async (): Promise<IWordApi> => {
  console.log("Fetching player stats");

  try {
    const res = await axios.get("/api/getStats");
    return toInterface(res.data);
  } catch (e) {
    console.log(`An error occurred fetching player stats: ${e}`);
  }
};

export const postGuess = async (guess: string): Promise<IWordApi> => {
  console.log(`Submitting guess: ${guess}`);

  try {
    const res = await axios.post("/api/submitGuess", {
      guess,
    });
    return toInterface(res.data);
  } catch (e) {
    console.log(e);
  }
};

const toInterface = (obj: any): IWordApi => {
  return {
    gameStatus: obj["game-status"],
    guessIsCorrect: obj["guess-is-correct"],
    lives: obj["lives"],
    guesses: obj["guesses"].length
      ? obj["guesses"].map((guess: any) => toGuess(guess))
      : [],
    bestGuess: obj["best-guess"] ? toGuess(obj["best-guess"]) : null,
  };
};

const toGuess = (obj: any): IGuess => {
  return {
    red: obj["red"],
    green: obj["green"],
    blue: obj["blue"],
    accuracy: obj["accuracy"],
  };
};
