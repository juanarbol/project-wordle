import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess from '../Guess'
import GuessSlots from '../GuessSlots'
import GameFinishLegend from '../GameFinishLegend'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

// Pick a random word on every pageload.
const parentAnswer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer: parentAnswer });

function Game() {
  const [answer, setAnswer] = React.useState(parentAnswer)
  const [guess, setGuess] = React.useState('');
  const [guessList, setGuessList] = React.useState([]);
  const [won, setWon] = React.useState(false)
  // Handle form submit
  const handleGuess = () => {
    setGuessList([...guessList, guess]);
  }

  const handleReset = () => {
    const newWord = sample(WORDS)
    console.info({ answer: newWord });
    setAnswer(newWord)
    setGuess('')
    setGuessList([])
    setWon(false)
  }

  return (
    <>
      <GuessSlots guesses={guessList} answer={answer} won={won} setWon={setWon} />
      <Guess guess={guess} setGuess={setGuess} handleGuess={handleGuess} />
      {(guessList.length === NUM_OF_GUESSES_ALLOWED || won) &&
        <GameFinishLegend won={won} guesses={guessList.length} answer={answer} handleReset={handleReset} />
      }
    </>
  )
}

export default Game;
