import React from 'react';
import '../styles/WineCard.css';

const WineCard = (props) => {
  let wine = props.wine
  return(
    <div className="wine-row">
      <h1 className="wine-name">{ wine.name }</h1>
      <p className="wine-description">{ wine.description }</p>
      <img className="wine-image"
        src="wine-glass-by-kym-ellis.jpg"
        alt="Wine glass overlooking vinyard by Kym Ellis"/>
    </div>
  )
}

export default WineCard
