import React from 'react'
import '../styles/WineCategory.css';
import { Link } from 'react-router-dom'

const WineCategoryCard = (props) => {
  let wineCategory = props.wineCategory
  return(
    <Link to={`/wine-categories/${wineCategory.name.replace(/ /g, "-")}/${ wineCategory.id }`}>
      <div className="wine-category-row">
        <h1 className="wine-category-name">{ wineCategory.name }</h1>
      </div>
    </Link>
  )
}

export default WineCategoryCard
