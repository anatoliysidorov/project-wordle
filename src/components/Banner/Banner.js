import React from "react";

function Banner({ guessList, answer, answered, isGameOver, resetGame }) {
  return (
    <div>
      <div
        className="happy banner"
        style={{ display: answered ? "block" : "none" }}
      >
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {guessList.length} guesses</strong>.
        </p>
        <button className="button-10" onClick={resetGame}>
          Reset Game
        </button>
      </div>
      <div
        className="sad banner"
        style={{
          display: isGameOver ? "block" : "none",
        }}
      >
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
        <button className="button-10" onClick={resetGame}>
          Reset Game
        </button>
      </div>
    </div>
  );
}

export default Banner;
