import React from 'react';
import '../styles/HomePage.css';
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <section>
      <div className="home-page-container">
        <div className="home-page">
          <h1 className="home-page-header">
            <Link to="/wine-categories">
              Browse Wine Categories
            </Link>
          </h1>
          <p className="home-page-paragraph">Not sure what style of wine you are looking for? Come explore!</p>
          <img className="home-page-image"
            src="dusty-bottles-by-marco-mornati.jpg"
            alt="Dusty Wine Bottles by Marco Mornati"/>
        </div>
        <div className="home-page">
          <h1 className="home-page-header">
            <Link to="/wines">
              Browse Wines
            </Link>
          </h1>
          <p className="home-page-paragraph">Come uncork a bottle and discover what wines suit your taste!</p>
          <img className="home-page-image"
            src="corks-by-elisha-terada.jpg"
            alt="Wine Corks by Elisha Terada"/>
        </div>
        <div className="home-page">
          <h1 className="home-page-header">
            <Link to="/foods">
              Browse Food Types
            </Link>
          </h1>
          <p className="home-page-paragraph">View the different food types that pair well with wine.</p>
          <img className="home-page-image"
            src="food-and-wine-by-brooke-lark.jpg"
            alt="Platter of Food with Dip by Brooke Lark"/>
        </div>
      </div>
    </section>
  )
}

export default HomePage
