import React from "react";
import CardImg from '../images/3.png';

function PokemonDetail() {
  return (
    <div className="container text-center">
      <div className="pokemon">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <div className="pokemon-img">
                <img src={CardImg} alt=""/>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="pokemon-id">
                <h3>#1</h3>
              </div>
              <div className="pokemon-name">
                <h2>Bulbarsaur</h2>
              </div>
              <div className="pokemon-type text-center">
                <h3>Type</h3>
                <div className="type-grp">
                  <p>Poision</p>
                  <p>Grass</p>
                </div>
              </div>
              <div className="container">
                <div className="row pokemon-about justify-content-center">
                  <div className="col col-md-3 col-12">
                    <div className="about-detail about-height">
                      <h4>Height</h4>
                      <p>111</p>
                    </div>
                  </div>
                  <div className="col col-md-3 col-12">
                    <div className="about-detail about-weight">
                      <h4>Weight</h4>
                      <p>25</p>
                    </div>
                  </div>
                  <div className="col col-md-3 col-12">
                    <div className="about-detail about-ability">
                      <h4>Ability</h4>
                      <p>fire</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetail;
