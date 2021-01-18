import React from "react";
import CardImg from '../images/3.png';

function PokemonDetail() {
  return (
    <div className="container text-center ptop">
      <div className="pokemon">

        <div className="pokemon-content">
          <div className="container">
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
            <div className="pokemon-more-detail row justify-content-center">
              <div className="col-4 col-lg-2 more-detail">
                <h4>Height</h4>
                <p>111</p>
              </div>
              <div className="col-4 col-lg-2 more-detail">
                <h4>Weight</h4>
                <p>23</p>
              </div>
              <div className="col-4 col-lg-2 more-detail">
                <h4>Ability</h4>
                <p>attack</p>
              </div>
              <div className="col-4 col-lg-2 more-detail">
                <h4>Egg Group</h4>
                <p>monster</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container about">
          <div className="row">
            <div className="col-12">
              <h3>About</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo laudantium quibusdam, dolores optio harum, amet eaque incidunt error voluptatibus cumque dolorum. Enim quisquam ratione impedit quia error, veniam incidunt beatae.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetail;