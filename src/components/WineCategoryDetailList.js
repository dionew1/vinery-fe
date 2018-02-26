import React from 'react'
import WineList from './WineList'
import FoodList from './FoodList'
import '../styles/WineCategoryDetail.css'

const WineCategoryDetailList = (props) => {
  let wines = props.wineDetails
  let foods = props.foodDetails
  return(
    <div className="wine-category-detail-list">
      <div className="wine-category-wine-detail-module">
        <h1 className="detail-header">Wines</h1>
        <WineList wines={ wines }/>
      </div>
      <div className="wine-category-food-detail-module">
        <h1 className="detail-header">Foods</h1>
        <FoodList foods={ foods }/>
      </div>
    </div>
  )
}

export default WineCategoryDetailList
