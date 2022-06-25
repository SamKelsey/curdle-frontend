import axios from "axios";

import { IColor, IGuess } from "../types/board";

interface IWordApi {
  gameStatus: string;
  guessIsCorrect: boolean;
  targetColour: IColor;
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

export const postGuess = async (guess: IGuess): Promise<IWordApi> => {
  const jsonGuess = toJson(guess);
  console.log(`Submitting guess: ${jsonGuess}`);

  try {
    const res = await axios.post("/api/submitGuess", jsonGuess, {
      headers: {
        "Content-Type": "application/json",
      },
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
    targetColour: obj["target-colour"],
    lives: obj["lives"],
    guesses: obj["guesses"].length
      ? obj["guesses"].map((guess: any) => toGuess(guess))
      : [],
    bestGuess: obj["best-guess"] ? toGuess(obj["best-guess"]) : null,
  };
};

const toJson = (guess: IGuess): string => {
  return JSON.stringify({
    "colour-1": { ...guess.colour1 },
    "colour-2": { ...guess.colour2 },
  });
};

const toGuess = (obj: any): IGuess => {
  return {
    colour1: {
      red: obj["colour-1"]["red"],
      green: obj["colour-1"]["green"],
      blue: obj["colour-1"]["blue"],
    },
    colour2: {
      red: obj["colour-2"]["red"],
      green: obj["colour-2"]["green"],
      blue: obj["colour-2"]["blue"],
    },
    resultColour: obj["guess"],
    accuracy: obj["accuracy"],
  };
};
