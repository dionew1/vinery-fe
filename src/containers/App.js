import React, { Component } from 'react'
import '../styles/App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from '../components/Nav'
import HomePage from '../components/HomePage'
import WineContainer from './WineContainer'
import FoodContainer from './FoodContainer'
import WineCategoryContainer from './WineCategoryContainer'
import WineCategoryDetailContainer from './WineCategoryDetailContainer'
import WineFoodsContainer from './WineFoodsContainer'
import FoodWinesContainer from './FoodWinesContainer'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <header className="app-header">
            <img className="app-glass" src="/favicon.ico" alt="Wine Glass"/>
            <h1 className="app-title">Welcome to Vinery</h1>
            <Nav/>
          </header>
          <main>
            <Switch>
              <Route exact path="/wine-categories/:name/:id" component={ WineCategoryDetailContainer }/>
              <Route path="/wine-categories" component={ WineCategoryContainer }/>
              <Route exact path="/wines/:name/:id/foods" component={ WineFoodsContainer }/>
              <Route path="/wines" component={ WineContainer }/>
              <Route exact path="/foods/:name/:id/wines" component={ FoodWinesContainer }/>
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
