// src/App.js
import {useState} from 'react'
import Header from './components/Header'
import GameView from './components/GameView'
import ResultView from './components/ResultView'
import RulesPopup from './components/RulesPopup'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const App = () => {
  const [score, setScore] = useState(0)
  const [gameStatus, setGameStatus] = useState('PLAYING') // 'PLAYING' | 'RESULT'
  const [yourChoice, setYourChoice] = useState(null)
  const [opponentChoice, setOpponentChoice] = useState(null)
  const [result, setResult] = useState('')

  const getOpponentChoice = () =>
    choicesList[Math.floor(Math.random() * choicesList.length)]

  const determineResult = (player, opponent) => {
    if (player.id === opponent.id) {
      return 'IT IS DRAW'
    }
    if (
      (player.id === 'PAPER' && opponent.id === 'ROCK') ||
      (player.id === 'SCISSORS' && opponent.id === 'PAPER') ||
      (player.id === 'ROCK' && opponent.id === 'SCISSORS')
    ) {
      return 'YOU WON'
    }
    return 'YOU LOSE'
  }

  const playGame = choice => {
    const opponent = getOpponentChoice()
    setYourChoice(choice)
    setOpponentChoice(opponent)

    const outcome = determineResult(choice, opponent)
    setResult(outcome)

    if (outcome === 'YOU WON') {
      setScore(prev => prev + 1)
    } else if (outcome === 'YOU LOSE') {
      setScore(prev => prev - 1)
    }
    setGameStatus('RESULT')
  }

  const resetGame = () => {
    setGameStatus('PLAYING')
    setYourChoice(null)
    setOpponentChoice(null)
    setResult('')
  }

  return (
    <div className="app-root">
      <Header score={score} />
      {gameStatus === 'PLAYING' ? (
        <GameView choicesList={choicesList} playGame={playGame} />
      ) : (
        <ResultView
          yourChoice={yourChoice}
          opponentChoice={opponentChoice}
          result={result}
          resetGame={resetGame}
        />
      )}
      <RulesPopup />
    </div>
  )
}

export default App
