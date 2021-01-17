import React from 'react';
import CardImg from '../images/3.png'

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
            <h3 className="text-center">Bulbarsaur</h3>
          </div>
          <div className="card-search text-center">
            <button className="btn button">View Detail</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
