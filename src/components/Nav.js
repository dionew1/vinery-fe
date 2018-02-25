import React from 'react'
import { Link } from 'react-router-dom'


// const checkUrl = () => {
//   let splitUrl = document.URL.split('/')
//   let path = splitUrl[3]
//   return path
// }

const Nav = () => {
  return(
    <nav>
      <Link to="/wine-categories"> Wine Categories </Link>
      <Link to="/wines"> Wines </Link>
      <Link to="/foods"> Food Types </Link>
    </nav>
  )
}

export default Nav
