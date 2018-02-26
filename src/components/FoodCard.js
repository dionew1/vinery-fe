import React from 'react';
import '../styles/Food.css'
import { Link } from 'react-router-dom'

const createAltTag = (food) => {
  return(
    food.image_url.split("/").pop()
  )
}

const FoodCard = (props) => {
  let food = props.food
  let foodName = (typeof food.name != "undefined")?food.name.replace(/ /g, "-") : ""
  return(
    <Link to={`/foods/${foodName}/${food.id}/wines`}>
      <div className="food-row">
        <h1 className="food-name">{ food.name }</h1>
        <img className="food-image"
          src={ food.image_url }
          alt={ createAltTag(food) } />
      </div>
    </Link>
  )
}

export default FoodCard
