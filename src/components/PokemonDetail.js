import React, { useState, useEffect } from "react";
// import CardImg from '../images/3.png';
import axios from "axios";
import Loader from "./Loader";

function PokemonDetail(props) {

  // console.log(props.match.params.pokemon);
  const [pokemon, setPokemon] = useState(null);
  const [ability, setAbility] = useState(null);
  const id = props.match.params.pokemon;

  useEffect(() => {
    window.scrollTo(0, 0)
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => {
      setPokemon(res.data)
    })
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    .then(res => {
      setAbility(res.data)
    })
  }, [id])

  // console.log(pokemon);
  if(parseInt(id) > 649) return <div className="container data-not-avalible text-center">Data not available</div>

  let pokemonDetail = pokemon && ability ? (
    <div className="pokemon">

        <div className="pokemon-content">
          <div className="container">
            <div className="pokemon-img">
              <img src={pokemon.sprites.other.dream_world.front_default} alt=""/>
            </div>
            <div className="pokemon-id-name">
              <h2>#{pokemon.id} {pokemon.forms[0].name.charAt(0).toUpperCase() + pokemon.forms[0].name.slice(1)}</h2>
            </div>
            <div className="pokemon-type text-center">
              <h3>Type</h3>
              <div className="type-grp">
                {
                  pokemon.types.map((type, id) => {
                    return (
                      <p key={id}>{type.type.name}</p>
                    )
                  })
                }
              </div>
            </div>
            <div className="pokemon-more-detail row justify-content-center">
              <div className="col-4 col-lg-2 more-detail">
                <p>Height</p>
                <h4>{parseInt(pokemon.height) / 10} m</h4>
              </div>
              <div className="col-4 col-lg-2 more-detail">
                <p>Weight</p>
                <h4>{parseInt(pokemon.weight) / 10} kg</h4>
              </div>
              <div className="col-4 col-lg-2 more-detail">
                <p>Egg Group</p>
                <h4>{ability.egg_groups[0].name.charAt(0).toUpperCase() + ability.egg_groups[0].name.slice(1)}</h4>
              </div>
              <div className="col-4 col-lg-2 more-detail">
                <p>Ability</p>
                <h4>{pokemon.abilities[0].ability.name.charAt(0).toUpperCase() + pokemon.abilities[0].ability.name.slice(1)}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="container about">
          <div className="row">
            <div className="col-12">
              <div className="pokemon-stats">
                {
                  pokemon.stats.map((stat, i) => {
                    return <h5 key={i}>{stat.stat.name.toUpperCase()}: <span>{stat.base_stat}</span></h5>
                  })
                }
              </div>
            </div>
            <div className="col-12 pt-3">
              <h3>About</h3>
              <p>{ability.flavor_text_entries[0].flavor_text}</p>
            </div>
          </div>
        </div>
      </div>
  ) : (
    <Loader />
  )

  return (
    <div className="container text-center ptop">
      {pokemonDetail}
    </div>
  )
}

export default PokemonDetail;