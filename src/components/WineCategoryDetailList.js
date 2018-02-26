import React from 'react'
import WineList from './WineList'
import FoodList from './FoodList'

const WineCategoryDetailList = (props) => {
  let wines = props.wineDetails
  let foods = props.foodDetails
  return(
    <div className="wine-category-detail-list">
      <h1> Wines </h1>
      <WineList wines={ wines }/>
      <h1> Foods </h1>
      <FoodList foods={ foods }/>
    </div>
  )
}

export default WineCategoryDetailList
