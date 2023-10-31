// Write your code here

import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timer: 0, isTimerRunning: false}

  onClickStartButton = () => {
    this.timerID = setInterval(this.tick, 1000)
    this.setState({isTimerRunning: true})
  }

  onClickStopButton = () => {
    clearInterval(this.timerID)
    this.setState({isTimerRunning: false})
  }

  onClickResetButton = () => {
    clearInterval(this.timerID)
    this.setState({timer: 0, isTimerRunning: false})
  }

  tick = () => {
    this.setState(prevState => ({
      timer: prevState.timer + 1,
    }))
  }

  renderMinutes = () => {
    const {timer} = this.state
    const minutes = Math.floor(timer / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {timer} = this.state
    const seconds = Math.floor(timer % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    const {isTimerRunning} = this.state
    return (
      <div className="bg-container">
        <div className="background">
          <h1 className="heading">Stopwatch</h1>

          <div className="box-background">
            <div className="box-container">
              <img
                className="clock"
                alt="stopwatch"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              />

              <p className="timer-paragraph">Timer</p>
            </div>

            <h1 className="timer-heading">{time}</h1>

            <div className="button-container">
              <button
                className="start-button button"
                type="button"
                onClick={this.onClickStartButton}
                disabled={isTimerRunning}
              >
                Start
              </button>

              <button
                className="stop-button button"
                type="button"
                onClick={this.onClickStopButton}
              >
                Stop
              </button>

              <button
                className="reset-button button"
                type="button"
                onClick={this.onClickResetButton}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
