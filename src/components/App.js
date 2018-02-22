import React, { Component } from 'react';
import '../styles/App.css';

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
          <div className="Container">
            <div className="Home-page">
              <h1 className="Home-page-header">Browse Wine Categories</h1>
              <p className="Home-page-paragraph">Not sure what style of wine you are looking for? Come explore!</p>
              <img className="Home-page-image"
                src="dusty-bottles-by-marco-mornati.jpg"
                alt="Dusty Wine Bottles photo by Marco Mornati"/>
            </div>
            <div className="Home-page">
              <h1 className="Home-page-header">Browse Wines</h1>
              <p className="Home-page-paragraph">Come uncork a bottle and discover what wines suit your taste!</p>
              <img className="Home-page-image"
                src="dark-corks-by-elisha-terada.jpg"
                alt="Wine Corks photo by Elisha Terada"/>
            </div>
            <div className="Home-page">
              <h1 className="Home-page-header">Browse Food Types</h1>
              <p className="Home-page-paragraph">View the different food types that pair well with wine.</p>
              <img className="Home-page-image"
                src="food-and-wine-by-brooke-lark.jpg"
                alt="Platter of Food with Dip by Brooke Lark"/>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
