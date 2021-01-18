import React, { Component } from 'react'
import Card from './Card'
import axios from 'axios'

class PokemonList extends Component {

  state = {
    pokemonList: []
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(res => {
      res.data.results.forEach(pokemon => {
        axios.get(pokemon.url)
        .then(res => {
          this.setState({
            pokemonList: [...this.state.pokemonList, res.data]
          })
        })
      })
    })
  }


  render() {
    let pokemons = this.state.pokemonList.sort((a, b) => {
      return parseInt(a.id) - parseInt(b.id)
    })
    let cards = pokemons.length ? (
      pokemons.sort(pokemons.id).map(pokemon => {
        return <Card pokemon={pokemon} key={pokemon.id}/>
      })
    ) : (
      <div className="col">loading</div>
    )
    return (
      <div className="container pokemon-list">
        <div className="row">
          {cards}
        </div>
        
      </div>
    )
  }
}

export default PokemonList
