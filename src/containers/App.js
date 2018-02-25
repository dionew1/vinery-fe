import React, { Component } from 'react'
import '../styles/App.css'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Nav from '../components/Nav'
import HomePage from '../components/HomePage'
import WineContainer from './WineContainer'
import FoodContainer from './FoodContainer'
import WineCategoryContainer from './WineCategoryContainer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <header className="app-header">
            <img className="app-glass" src="favicon.ico" alt="Wine Glass"/>
            <h1 className="app-title">Welcome to Vinery</h1>
            <Nav/>
          </header>
          <main>
            <Switch>
              <Route path="/wine-categories" component={ WineCategoryContainer }/>
              <Route path="/wines" component={ WineContainer }/>
              <Route path="/foods" component={ FoodContainer }/>
              <Route path="/" component={ HomePage }/>
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
