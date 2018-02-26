import React, { Component } from 'react'
import WineList from '../components/WineList'
import FoodCard from '../components/FoodCard'
import { getWinesForWineCategory, getWineCategoriesForFood } from '../utils/requests'

class FoodWinesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foodId: props.match.params.id,
      food: {},
      wines: [],
    }
  }
}

export default FoodWinesContainer
