import React from 'react';
// import CardImg from '../images/3.png';
import { Link } from 'react-router-dom';

function Card({ pokemon }) {
  return (
    <div className="col-12 col-md-6 col-sm-12 col-lg-4">
      <div className="card">
        <div className="card-img">
          <img src={pokemon.sprites.other.dream_world.front_default} alt=""/>
        </div>
        <div className="card-content">
          <div className="card-id">
            <p>#{pokemon.id}</p>
          </div>
          <div className="card-name">
            <h3 className="text-center">{pokemon.forms[0].name.charAt(0).toUpperCase() + pokemon.forms[0].name.slice(1)}</h3>
          </div>
          <div className="card-search text-center">
            <Link to={'/' + pokemon.id}>
              <button className="btn button">View Detail</button> 
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
