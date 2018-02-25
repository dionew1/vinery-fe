import React, { Component } from 'react';
import WineList from '../components/WineList'
import { getAllWines } from '../utils/requests'

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
      .catch((error) => console.error({ error }))
  }

  render() {
    return(
      <WineList wines={ this.state.wines }/>
    )
  }
}

export default WineContainer
