import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [gameStatus, setGameStatus] = React.useState("running");

  console.info({ answer });

  function handleGuess(tentativeGuess) {
    const guess = {
      value: tentativeGuess,
      id: `${tentativeGuess}-${Math.random()}`,
    };
    const guesses = [...guessList, guess];

    setGuessList(guesses);

    if (guess.value === answer) {
      setGameStatus("won");
    } else if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  function resetGame() {
    setAnswer(sample(WORDS));
    setGuessList([]);
    setGameStatus("running");
  }

  return (
    <>
      {gameStatus !== "running" && (
        <button className="button-10" onClick={resetGame}>
          Reset Game
        </button>
      )}
      <GuessList guessList={guessList} answer={answer} />
      <GuessInput handleGuess={handleGuess} gameStatus={gameStatus} />
      {gameStatus === "won" && <WonBanner numOfGuesses={guessList.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
