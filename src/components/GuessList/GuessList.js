import React from "react";

function GuessList({ guessList }) {
  //console.log(guessList);

  return (
    <div className="guess-results">
      {guessList.map(({ value, id }) => (
        <p className="guess" key={id}>
          {value}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
