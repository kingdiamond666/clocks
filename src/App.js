import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Background from './tevin-trinh-392388.jpg';
import './App.css';
import Home from './Home';
import Clock from './Clock';
import Stopwatch from './Stopwatch';
class App extends Component {
  constructor(props){
    super(props)
    this.state = {}

  }

  render() {

    return (
      <Router>
        <div className="App">
          <div className="header">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/clock">Clock</Link></li>
              <li><Link to="/stopwatch">Stop Watch</Link></li>
            </ul>
          </div>

          <Route exact path="/" component={Home} />
          <Route path="/clock" component={Clock} />
          <Route path="/stopwatch" component={Stopwatch} />  
        </div>
      </Router>
    );
  }
}

export default App;
