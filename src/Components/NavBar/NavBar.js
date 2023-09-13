import './NavBar.css'

function NavBar(params) {
  //   console.log(params)
  const {score, timerCount} = params
  return (
    <ul className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="nav-logo"
      />
      <div className="score-container">
        <li className="flex">
          <p>Score:</p>
          <p>{score}</p>
        </li>
        <li className="flex">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p>{timerCount} sec</p>
        </li>
      </div>
    </ul>
  )
}

export default NavBar
