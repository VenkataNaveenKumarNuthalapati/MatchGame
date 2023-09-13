import './GameResult.css'

const GameResult = props => {
  const {score, restartGame} = props

  return (
    <div className="game-result">
      <img
        className="trophy"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p>YOUR SCORE</p>
      <p>{score}</p>
      <button
        className="reset-button"
        type="button"
        onClick={() => restartGame()}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default GameResult
