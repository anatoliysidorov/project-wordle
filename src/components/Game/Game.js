import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import Guess from "../Guess";
import Banner from "../Banner/Banner";

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [gameOver, setGameOver] = React.useState(false);
  const [answered, setAnswered] = React.useState(false);

  console.info({ answer });

  function handleGuess(tentativeGuess) {
    const guess = {
      value: tentativeGuess,
      id: `${tentativeGuess}-${Math.random()}`,
    };
    setGuessList([...guessList, guess]);
    setGameOver(guessList.length === 5 && guess.value !== answer);
    setAnswered(guess.value === answer);
  }

  function resetGame() {
    setAnswer(sample(WORDS));
    setGuessList([]);
    setGameOver(false);
    setAnswered(false);
  }

  return (
    <>
      <Guess guessList={guessList} answer={answer} />
      <GuessList guessList={guessList} />
      <GuessInput
        handleGuess={handleGuess}
        answered={answered}
        isGameOver={gameOver}
      />
      <Banner
        guessList={guessList}
        answer={answer}
        answered={answered}
        isGameOver={gameOver}
        resetGame={resetGame}
      />
    </>
  );
}

export default Game;
