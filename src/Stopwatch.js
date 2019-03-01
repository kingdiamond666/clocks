import React, { Component } from 'react';

class Stopwatch extends Component{
    constructor(props){
        super(props)
        let m3thods = ["updateClock", "startTimer", "resetTimer" ]
        m3thods.forEach((method) => {
            this[method] = this[method].bind(this);
        })
        this.state = this.firstState = {
            isRunning: true,
            seconds: 0,
            minutes: 0,
            millis: 0,
        }
    }
    startTimer(){
        this.setState(prevState => ({
            isRunning: !prevState.isRunning
        }))
        this.updateClock()
    }

   updateClock(){
    if(this.state.isRunning){
        this.timerID = setInterval(() => {
            this.setState(prevState => ({
                millis: prevState.millis += 1,
                
            }))
            if(this.state.seconds > 59){
                this.setState(prevState =>({
                    seconds: 0,
                    minutes: prevState.minutes += 1
                }))
            }
            if(this.state.millis > 100){
                this.setState(prevState =>({
                    seconds: prevState.seconds += 1,
                    millis: 0
                }))
            }
        },10)
    }else{
        clearInterval(this.timerID)
    }
   } 
   resetTimer(){
       clearInterval(this.timerID)
       this.setState(this.firstState)
   }
   componentWillUnmount() {
    this.resetTimer();
  }
    render(){
        const { isRunning, minutes, seconds, millis } = this.state;
        let pButton = isRunning ? <button className="button" onClick={ this.startTimer }>Start</button> : <button className="button"  onClick={ this.startTimer }>Pause</button>
        let displayMinutes = minutes > 0 ? <span><h1>{minutes < 10 ? "0" + minutes : minutes}</h1></span> : <span><h1>00</h1></span>
        return(
            <div className="Stopwatch">
                <div className="innerFace">
                <ul className="timer-label">
                    <li>Mins</li>
                    <li>Secs</li>
                    <li>M/S</li>
                </ul>
                    <div className="timer">
                       <span>{displayMinutes}</span> 
                       <span><h1>{seconds< 10 ? "0"+ seconds : seconds}</h1>:</span>
                       <span><h1>{this.state.millis < 10 ? "0"+ this.state.millis : this.state.millis}</h1></span>
                    </div>
                    {pButton}
                    <button className="button" onClick={ this.resetTimer }>Reset</button>
                </div>
            </div>
        )
    }
}


export default Stopwatch