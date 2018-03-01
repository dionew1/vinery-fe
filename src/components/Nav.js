import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Nav.css'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapseClass: "navLinks displayNone"
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    let collapseClass = this.state.collapseClass
    this.setState(
      { collapseClass: (collapseClass == "navLinks")? "navLinks displayNone":"navLinks" })
  }

  renderNavLinks() {
    return (<div className={ this.state.collapseClass }>
      <Link to="/"> Home </Link>
      <Link to="/wine-categories"> Wine Categories </Link>
      <Link to="/wines"> Wines </Link>
      <Link to="/foods"> Food Types </Link>
    </div>)
  }

  render() {
    return(
      <nav>
        <div className="desktop">
          <Link to="/"> Home </Link>
          <Link to="/wine-categories"> Wine Categories </Link>
          <Link to="/wines"> Wines </Link>
          <Link to="/foods"> Food Types </Link>
        </div>
        <div className="mobile" onClick={ this.handleClick }>
          <img className="menu-toggle" src="/menu.png" alt="menu-icon"/>
        </div>
        { this.renderNavLinks() }
      </nav>
    )
  }
}

export default Nav
