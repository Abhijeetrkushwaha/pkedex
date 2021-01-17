import React from "react";
import CardImg from '../images/3.png';

function PokemonDetail() {
  return (
    <div className="container text-center">
      <div className="pokemon">
        <div className="pokemon-id">
          <h3>#1</h3>
        </div>
        <div className="pokemon-name">
          <h2>Bulbarsaur</h2>
        </div>
        <div className="pokemon-img">
          <img src={CardImg} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetail;
