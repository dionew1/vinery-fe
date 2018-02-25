import React, { Component } from 'react';
import WineCategoryList from '../components/WineCategoryList'
import { getAllWineCategories } from '../utils/requests'

class WineCategoryContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wineCategories: []
    }
  }

  componentDidMount() {
    getAllWineCategories()
      .then((wineCategories) => this.setState({ wineCategories: wineCategories}))
      .catch((error) => console.log({ error }))
  }

  render() {
    return(
      <WineCategoryList wineCategories={ this.state.wineCategories }/>
    )
  }
}

export default WineCategoryContainer
