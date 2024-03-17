import React from 'react';

function Guess({ guess, setGuess, handleGuess }) {
  const handleSubmit = event => {
    event.preventDefault();
    console.log(`You guessed: ${guess}`);
    handleGuess(guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text"
        minLength={5}
        maxLength={5}
        pattern="[A-Za-z]{5}"
        value={guess}
        onChange={event => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  )
}

export default Guess;
