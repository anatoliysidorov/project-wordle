import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import checkGuess from "../../game-helpers";

function Guess({ guessList, answer }) {
  const arrStatus = [];
  guessList.map(({ value }) => {
    arrStatus.push(checkGuess(value, answer));
  });

  //console.log(arrStatus);

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <p className="guess" key={num}>
          {range(5).map((col) => (
            <span
              className={`cell ${arrStatus[num] && arrStatus[num][col].status}`}
              key={col}
            >
              {guessList[num] && guessList[num].value[col]}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Guess;
