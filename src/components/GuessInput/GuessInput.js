import React from "react";

function GuessInput({ handleGuess, answered, gameOver }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  const regEx = "[a-zA-Z]*";

  function onSubmitForm(event) {
    event.preventDefault();
    const val = event.target[0].value;
    if (val.length === 5) {
      handleGuess(tentativeGuess);
      setTentativeGuess("");
    }
  }

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmitForm}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        disabled={answered || gameOver}
        maxLength={5}
        minLength={5}
        pattern="[a-zA-Z]*"
        title="5 letter word"
        value={tentativeGuess}
        onChange={(event, cmp) => {
          setTentativeGuess(event.target.value.toUpperCase().match(regEx)[0]);
        }}
      />
    </form>
  );
}

export default GuessInput;
