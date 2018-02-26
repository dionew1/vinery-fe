import React from 'react';

const createAltTag = (food) => {
  return(
    food.image_url.split("/").pop()
  )
}

const FoodCard = (props) => {
  let food = props.food
  return(
    <div className="food-row">
      <h1 className="food-name">{ food.name }</h1>
      <img className="food-image"
        src={ food.image_url }
        alt={ createAltTag(food) } />
    </div>
  )
}

export default FoodCard
