import React from 'react'
import '../styles/Wine.css'
import { Link } from 'react-router-dom'

const WineCard = (props) => {
  let wine = props.wine
  let wineName = (typeof wine.name != "undefined")?wine.name.replace(/ /g, "-") : ""
  return(
    <div className="wine-row">
      <img className="wine-image"
      src="/wine-glass-by-kym-ellis.jpg"
      alt="Wine glass overlooking vinyard by Kym Ellis"/>
      <Link to={`/wines/${wineName}/${ wine.id }/foods`}>
        <div className="wine-details">
          <div className="wine-detail-module">
            <h1 className="wine-name">{ wine.name }</h1>
            <p className="wine-description">{ wine.description }</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default WineCard
