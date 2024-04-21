import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import Guess from "../Guess";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [isAnswer, setIsAnswer] = React.useState(false);

  function handleGuess(tentativeGuess) {
    const guess = {
      value: tentativeGuess,
      id: `${tentativeGuess}-${Math.random()}`,
    };
    setGuessList([...guessList, guess]);
    setIsAnswer(guess.value === answer);
    //console.log(guess.value === answer);
  }

  return (
    <>
      <Guess guessList={guessList} answer={answer} />
      <GuessList guessList={guessList} />
      <GuessInput handleGuess={handleGuess} answer={answer} />
      <Banner guessList={guessList} answer={answer} isAnswer={isAnswer} />
    </>
  );
}

export default Game;
