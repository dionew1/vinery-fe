import React from 'react';
import WineCategoryCard from './WineCategoryCard'

const createWineCategoryCard = (wineCategories) => {
  return(
    wineCategories.map((wineCategory) => {
      return(<WineCategoryCard
        key={ wineCategory.id }
        wineCategory={ wineCategory }/>
      )
    })
  )
}

const WineCategoryList = (props) => {
  let wineCategories = props.wineCategories
  return(
    <div className="wine-category-list">
      { createWineCategoryCard(wineCategories)}
    </div>
  )
}

export default WineCategoryList
