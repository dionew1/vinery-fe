import React from 'react';
import '../styles/WineList.css';
import WineCard from './WineCard'


const createWineCard = (wines) => {
  return(
    wines.map((wine) => {
      return (<WineCard
        key={ wine.id }
        wine={ wine }/>
      )
    })
  )
}

const WineList = (props) => {
  let wines = props.wines
  return(
    <div className="wine-list">
      { createWineCard(wines) }
    </div>
  )
}

export default WineList
