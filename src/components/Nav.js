import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return(
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/wine-categories"> Wine Categories </Link>
      <Link to="/wines"> Wines </Link>
      <Link to="/foods"> Food Types </Link>
    </nav>
  )
}

export default Nav
