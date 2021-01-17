import React from "react";
import Logo from '../images/pokemon.png'

function Nav() {
  return (
    <header>
      <div className="container">
        <div className="nav">
          <div className="nav-brand">
            <img src={Logo} alt=""/>
          </div>
          <div className="nav-search">
            <button className="btn button">Search Pokemons</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Nav;
