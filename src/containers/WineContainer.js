import React, { Component } from 'react';
import WineList from '../components/WineList'
import { getAllWines, getWineCategory } from '../utils/requests'

class WineContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wines: []
    }
  }

  componentDidMount() {
    getAllWines()
      .then((wines) => this.setState({ wines: wines }))
      // .then((wine))
      .catch((error) => console.error({ error }))
  }

  render() {
    return(
      <WineList wines={ this.state.wines }/>
    )
  }
}

export default WineContainer
