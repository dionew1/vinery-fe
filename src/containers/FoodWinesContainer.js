import React, { Component } from 'react'
import WineCategoryList from '../components/WineCategoryList'
import FoodCard from '../components/FoodCard'
import { getWineCategoriesForFood, getFood } from '../utils/requests'

class FoodWinesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foodId: props.match.params.id,
      food: {},
      wineCategories: [],
    }
  }

  componentDidMount() {
    getFood(this.state.foodId)
      .then((food) => this.setState({ food: food }))
      .then(() => (getWineCategoriesForFood(this.state.food.id)))
      .then((wineCategories) => this.setState({ wineCategories: wineCategories }))
      .catch((error) => console.error({ error }))
  }

  render() {
    return(
      <div>
        <FoodCard food={ this.state.food }/>
        <WineCategoryList wineCategories={ this.state.wineCategories }/>
      </div>
    )
  }
}


export default FoodWinesContainer
