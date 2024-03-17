import React from 'react';

function Happy ({ guesses, reset }) {
  return (
    <div class="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{guesses} guesses</strong>.
        <button onClick={reset}>Reset game</button>
      </p>
    </div>
  )
}

function Sad ({ rightWord, reset }) {
  return (
    <div class="sad banner">
      <p>Sorry, the correct answer is <strong>{rightWord}</strong>.</p>
      <button onClick={reset}>Reset game</button>
    </div>
  )
}

function GameFinishLegend({ won, answer, guesses, handleReset }) {
  return won ? <Happy guesses={guesses} reset={handleReset} /> : <Sad reset={handleReset} rightWord={answer} />;
}

export default GameFinishLegend;
