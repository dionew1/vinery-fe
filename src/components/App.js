import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Vinery</h1>
          <img className="App-glass" src="favicon.ico" alt="Wine Glass"/>
        </header>
      </div>
    );
  }
}

export default App;
