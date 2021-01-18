import React from "react";
import CardImg from '../images/3.png';

function PokemonDetail() {
  return (
    <div className="container text-center ptop">
      <div className="pokemon">

        <div className="pokemon-content">
          <div className="pokemon-img">
            <img src={CardImg} alt=""/>
          </div>
          <div className="pokemon-id-name">
            <h2>#1 Bulbasaur</h2>
          </div>
          <div className="pokemon-type text-center">
            <h3>Type</h3>
            <div className="type-grp">
              <p>Poision</p>
              <p>Grass</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetail;