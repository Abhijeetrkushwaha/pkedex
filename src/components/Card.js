import React from 'react';
import CardImg from '../images/3.png';
import { Link } from 'react-router-dom';

function Card() {
  return (
    <div className="col col-md-6 col-lg-4">
      <div className="card">
        <div className="card-img">
          <img src={CardImg} alt=""/>
        </div>
        <div className="card-content">
          <div className="card-id">
            <p>#1</p>
          </div>
          <div className="card-name">
            <h3 className="text-center">Bulbasaur</h3>
          </div>
          <div className="card-search text-center">
            <Link to='/pokemon'>
              <button className="btn button">View Detail</button> 
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
