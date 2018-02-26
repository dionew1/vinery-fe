import React from 'react'
import '../styles/Wine.css'

const WineCard = (props) => {
  let wine = props.wine
  return(
    <div className="wine-row">
      <img className="wine-image"
      src="/wine-glass-by-kym-ellis.jpg"
      alt="Wine glass overlooking vinyard by Kym Ellis"/>
      <div className="wine-details">
        <div className="wine-detail-module">
          <h1 className="wine-name">{ wine.name }</h1>
          <p className="wine-description">{ wine.description }</p>
        </div>
      </div>
    </div>
  )
}

export default WineCard
