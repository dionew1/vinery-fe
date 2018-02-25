import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import HomePage from '../components/HomePage'
import WineContainer from './WineContainer'
import FoodContainer from './FoodContainer'

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
          <img className="app-glass" src="favicon.ico" alt="Wine Glass"/>
          <h1 className="app-title">Welcome to Vinery</h1>

        </header>
        <main>
          <BrowserRouter>
            <Switch>
              <Route path="/wine-categories"/>
              <Route path="/wines" component={ WineContainer }/>
              <Route path="/foods" component={ FoodContainer }/>
              <Route path="/" component={ HomePage }/>
            </Switch>
          </BrowserRouter>
        </main>
      </div>
    )
  }
}

export default App;
