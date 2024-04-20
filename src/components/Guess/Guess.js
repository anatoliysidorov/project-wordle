import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guess({ guessList }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <p className="guess" key={num}>
          {range(5).map((col) => (
            <span className="cell" key={col}>
              {guessList[num] && guessList[num].value[col]}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Guess;
