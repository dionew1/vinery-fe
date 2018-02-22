import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './HomePage'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Vinery</h1>
          <img className="App-glass" src="favicon.ico" alt="Wine Glass"/>
        </header>
        <main>
          <BrowserRouter>
            <Route path="/" component={ HomePage }/>
          </BrowserRouter>
        </main>
      </div>
    )
  }
}

export default App;
