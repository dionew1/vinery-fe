import React, { Component } from 'react'
import FoodList from '../components/FoodList'
import WineCard from '../components/WineCard'
import { getFoodsForWineCategory, getWine } from '../utils/requests'

class WineFoodsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wineId: props.match.params.id,
      wine: {},
      foods: [],
    }
  }

  componentDidMount() {
    getWine(this.state.wineId)
      .then((wine) => this.setState( { wine: wine }))
      .then(() => (getFoodsForWineCategory(this.state.wine.wine_category_id)))
      .then((foods) => this.setState({ foods: foods }))
      .catch((error) => console.error({ error }))
  }

  render() {
    return(
      <div>
        <WineCard wine={ this.state.wine }/>
        <FoodList foods={ this.state.foods }/>
      </div>
    )
  }
}

export default WineFoodsContainer
