import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from '../components/HomePage'
import WinesContainer from './WinesContainer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Welcome to Vinery</h1>
          <img className="app-glass" src="favicon.ico" alt="Wine Glass"/>
        </header>
        <main>
          <BrowserRouter>
            <div>
              <Route path="/" component={ HomePage }/>
              <Route path="/wine-categories"/>
              <Route path="/wines" component={ WinesContainer }/>
              <Route path="/foods"/>
            </div>
          </BrowserRouter>
        </main>
      </div>
    )
  }
}

export default App;
