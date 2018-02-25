import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from '../components/HomePage'

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
            <div>
              <Route path="/" component={ HomePage }/>
              <Route path="/wine-categories"/>
              <Route path="/wines"/>
              <Route path="/foods"/>
            </div>
          </BrowserRouter>
        </main>
      </div>
    )
  }
}

export default App;
