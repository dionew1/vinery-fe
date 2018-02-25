import React from 'react'

const WineCategoryCard = (props) => {
  let wineCategory = props.wineCategory
  return(
    <div className="wine-category-row">
      <h1 className="wine-category-name">{ wineCategory.name }</h1>
    </div>
  )
}

export default WineCategoryCard
