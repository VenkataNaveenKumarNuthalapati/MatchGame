import {Component} from 'react'
import NavBar from '../NavBar/NavBar'
import TabItem from '../TabItem/TabItem'
import ThumbNail from '../ThumbNail/ThumbNail'
import GameResult from '../GameResult/GameResult'
import './MathGame.css'

class MathGame extends Component {
  constructor(props) {
    super(props)
    this.tabsList = props.tabsList
    this.imagesList = props.imagesList
    this.timerId = setInterval(this.timer, 1000)
    this.state = {
      randomImage: this.imagesList[0].imageUrl,
      score: 0,
      timerCount: 60,
      selectedTab: this.tabsList[0].tabId,
      isTimerStart: false,
    }
  }

  timer = () => {
    const {timerCount} = this.state
    if (timerCount <= 0) {
      clearInterval(this.timerId)
    } else {
      this.setState(preState => ({
        ...preState,
        timerCount: timerCount - 1,
        isTimerStart: true,
      }))
    }
  }

  changeTabId = id => {
    this.setState({selectedTab: id})
  }

  checkResult = url => {
    const {randomImage, score} = this.state
    let randomImageIndex = Math.ceil(Math.random() * this.imagesList.length)
    if (randomImageIndex === this.imagesList.length) {
      randomImageIndex -= 1
    }

    if (randomImage === url) {
      this.setState(preState => ({
        ...preState,
        score: score + 1,
        randomImage: this.imagesList[randomImageIndex].imageUrl,
      }))
    } else {
      this.setState({timerCount: 0})
    }
  }

  restartGame = () => {
    this.setState({
      randomImage: this.imagesList[0].imageUrl,
      score: 0,
      timerCount: 60,
      selectedTab: this.tabsList[0].tabId,
      isTimerStart: false,
    })
    this.timerId = setInterval(this.timer, 1000)
  }

  render() {
    const {randomImage, score, timerCount, selectedTab} = this.state

    const tabsList = [...this.tabsList]
    const imagesList = [...this.imagesList]

    return (
      <div className="bg-container">
        <NavBar score={score} timerCount={timerCount} />
        {timerCount === 0 ? (
          <GameResult score={score} restartGame={this.restartGame} />
        ) : (
          <div className="content-container">
            <img className="random-image" src={randomImage} alt="match" />
            <ul className="tabs-container">
              {tabsList.map(eachTab => (
                <TabItem
                  key={eachTab.tabId}
                  eachTab={eachTab}
                  selectedTab={selectedTab}
                  changeTabId={this.changeTabId}
                />
              ))}
            </ul>
            <ul className="thumb-container">
              {imagesList.map(
                eachImg =>
                  eachImg.category === selectedTab && (
                    <ThumbNail
                      key={eachImg.id}
                      eachImg={eachImg}
                      selectedTab={selectedTab}
                      checkResult={this.checkResult}
                    />
                  ),
              )}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default MathGame
