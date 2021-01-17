import React from "react";
import Logo from '../images/pokemon.png';
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <header>
      <div className="container">
        <div className="nav">
          <div className="nav-brand">
            <Link to='/'>
              <img src={Logo} alt=""/>
            </Link>
          </div>
          <div className="nav-search">
            <Link to='/search'>
              <button className="btn button">Search Pokemons</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Nav;
