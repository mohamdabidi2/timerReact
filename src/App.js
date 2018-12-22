import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='background'>
      <div className="timer">
    
      <div className="timer-content">
      <div className="first-line">
      <p className='timer-content'>00</p>
      <p className='timer-content'>:</p>
      <p className='timer-content'>30</p>
      <p className='timer-content'>:</p>
      <p className='timer-content'>00</p>

      </div>
      <div className="second-line">
        <p className='content'>Hour</p>
        <p className='content'>Minute</p>
        <p className='content'>Second</p>
      </div>

      </div>
 
      </div>
      </div>
    );
  }
}

export default App;
