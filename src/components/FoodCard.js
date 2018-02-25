import React from 'react';

const FoodCard = (props) => {
  let food = props.food
  return(
    <div className="food-row">
      <h1 className="food-name">{ food.name }</h1>
    </div>
  )
}

export default FoodCard
