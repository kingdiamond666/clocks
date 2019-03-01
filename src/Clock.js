import React, { Component } from 'react';
import Background from './tevin-trinh-392388.jpg';


class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            seconds: '',
            minutes: '',
            hours: ''
        }
        this.updateClock = this.updateClock.bind(this);
    }
    updateClock = () => {
        this.setState({
            date: new Date(),
            seconds: this.state.date.getSeconds(),
            minutes: this.state.date.getMinutes(),
            hours: this.state.date.getHours() % 12
        })
    }
    componentDidMount(){
        this.timerID = setInterval(() => this.updateClock(), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
      }
    render(){
        let styleSeconds = {
            position:'absolute',
            top:'50%',
            width:'50%',
            height:'6px',
            transform: `rotate(${this.state.seconds * 6 + 95}deg)`,
            transformOrigin: '100%',
            // backgroundColor:'black',
            borderRadius: '3px',
          }
        let styleMinutes = {
            position:'absolute',
            top:'50%',
            width:'50%',
            height:'6px',
            transform: `rotate(${this.state.minutes * 6 + 90}deg)`,
            transformOrigin: '100%',
            // backgroundColor:'black',
            borderRadius: '3px'
          }
        let styleHours = {
            position:'absolute',
            top:'50%',
            width:'50%',
            height:'6px',
            transform: `rotate(${this.state.hours * 30 + 90}deg)`,
            transformOrigin: '100%',
            // backgroundColor:'black',
            borderRadius: '3px'

          }
        if(this.state.date)
        return(
            <div className="clockcomponent">
                <div className="timeDisplay">
                <p className="localTime">Time: {this.state.date.toLocaleTimeString()}</p>
                </div>
                <div className="clock">
                    <div className="clockFace">
                        <div className="hand seconds" style={styleSeconds}></div> 
                        <div className="hand minutes" style={styleMinutes}></div> 
                        <div className="hand hours" style={styleHours}></div> 
                    </div>
                </div>
            </div>
        )
    }
}
export default Clock;