import React from 'react';
import FoodCard from './FoodCard'


const createFoodCard = (foods) => {
  return(
    foods.map((food) => {
      return (<FoodCard
        key={ food.id }
        food= {food }/>)
    })
  )
}

const FoodList = (props) => {
  let foods = props.foods
  return(
    <div className="food-list">
      { createFoodCard(foods) }
    </div>
  )
}

export default FoodList
