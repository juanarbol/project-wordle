import React from 'react';
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { checkGuess } from '../../game-helpers'

const Cell = ({ className = '', letter = null }) => (
  <span className={`cell ${className}`}>{letter}</span>)

function GuessSlots({ guesses, answer, setWon }) {
  function getGuessCells (index) {
    if (!guesses[index])
      return range(0, 5).map(() => (<Cell key={crypto.randomUUID()} />))

    let correctCounter = 0;
    return checkGuess(guesses[index], answer)
      .map(({ letter, status }) => {
        if (status === 'correct') correctCounter++
        if (correctCounter === 5) setWon(true)

        return <Cell key={crypto.randomUUID()} className={status} letter={letter} />
      })
  }

  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((_, index) => (
        <p className="guess" key={crypto.randomUUID()}>
          {getGuessCells(index)}
        </p>
      ))}
    </div>
  )
}

export default GuessSlots;
