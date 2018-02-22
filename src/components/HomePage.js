import React from 'react';
import '../styles/HomePage.css';
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <main>
      <div className="Home-page-container">
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
            src="corks-by-elisha-terada.jpg"
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
  )
}

export default HomePage
