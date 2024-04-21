import React from "react";

function Banner({ guessList, answer, isAnswer }) {
  return (
    <div>
      <div
        className="happy banner"
        style={{ display: isAnswer ? "block" : "none" }}
      >
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {guessList.length} guesses</strong>.
        </p>
      </div>
      <div
        className="sad banner"
        style={{
          display:
            guessList.length === 6 && isAnswer === false ? "block" : "none",
        }}
      >
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    </div>
  );
}

export default Banner;
