import React, { Component } from 'react'
import Card from './Card'
import axios from 'axios'

class PokemonList extends Component {

  state = {
    pokemonList: [],
    nextUrl: '',
    startLoading: true,
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
      this.setState({
        nextUrl: res.data.next
      })
      // console.log(this.state.nextUrl);
    })
  }

  handleClick = () => {
    if(!this.state.nextUrl) return
    this.setState({
      startLoading: false,
    })
    axios.get(this.state.nextUrl)
    .then(res => {
      res.data.results.forEach(pokemon => {
        axios.get(pokemon.url)
        .then(res => {
          this.setState({
            pokemonList: [...this.state.pokemonList, res.data]
          })
        })
      })
      this.setState({
        nextUrl: res.data.next,
        startLoading: true
      })
      // console.log(this.state.nextUrl);
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
      <div className="col-12 text-center">
        <h4>Loading...</h4>
      </div>
    )
    return (
      <div className="container pokemon-list ptop">
        <div className="row justify-content-center">
          {cards}
        </div>
        <div className="load-more-pokemon">
          <div className="container">
            { (pokemons.length > 0) && (
              <div className="row justify-content-center mb-4 mt-2">
                { this.state.startLoading && <div className="btn button" style={{cursor: "pointer"}} onClick={this.handleClick}>Load more Pokemon</div>}
                { !this.state.startLoading && <h4>Loading...</h4>}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PokemonList
