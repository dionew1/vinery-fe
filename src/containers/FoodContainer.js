import React, { Component } from 'react';
import FoodList from '../components/FoodList'
import { getAllFoods } from '../utils/requests'

class FoodContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foods: []
    }
  }

  componentDidMount() {
    getAllFoods()
      .then((foods) => this.setState({ foods: foods }))
      .catch((error) => console.error({ error }))
  }

  render() {
    return (
      <FoodList foods={ this.state.foods }/>
    )
  }
}

export default FoodContainer
