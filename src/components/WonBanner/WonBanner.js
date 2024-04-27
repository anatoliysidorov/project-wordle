import React from "react";

function WonBanner({ numOfGuesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {" "}
          {numOfGuesses} {numOfGuesses === 1 ? " guess" : " guesses"}
        </strong>
        .
      </p>
    </div>
  );
}

export default WonBanner;
