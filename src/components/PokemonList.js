import React from "react";
import Card from "./Card";

function PokemonList() {
  return (
    <div className="container pokemon-list">
      <div className="row">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      
    </div>
  )
}

export default PokemonList;
