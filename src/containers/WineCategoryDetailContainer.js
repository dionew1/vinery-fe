import React, { Component } from 'react';
import WineCategoryDetailList from '../components/WineCategoryDetailList'
import { getFoodsForWineCategory, getWinesForWineCategory } from '../utils/requests'

class WineCategoryDetailContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.match.params.name,
      id: props.match.params.id,
      wineDetails: [],
      foodDetails: [],
    }
  }

  componentDidMount() {
    getWinesForWineCategory(this.state.id)
      .then((wines) => this.setState({ wineDetails: wines}))
      .catch((error) => console.error({ error }))
    getFoodsForWineCategory(this.state.id)
      .then((foods) => this.setState({ foodDetails: foods }))
      .catch((error) => console.error({ error }))
  }

  render() {
    return(
      <WineCategoryDetailList
      wineDetails={ this.state.wineDetails }
      foodDetails={ this.state.foodDetails }/>
    )
  }
}

export default WineCategoryDetailContainer
