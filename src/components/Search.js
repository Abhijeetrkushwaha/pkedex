import React, { useState } from 'react';
import axios from 'axios';
import Card from './Card';


function Search() {
  const [input, setInput] = useState('');
  const [pokemon, setPokemon] = useState(null);

  let handleClick = (e) => {
    e.preventDefault()
    if(!input) return false
    let newInput = input.toLowerCase()
    axios.get(`https://pokeapi.co/api/v2/pokemon/${newInput}`)
    .then(res => {
      setPokemon(res.data)
      setInput('')
    }).catch(err => {
      alert('Enter valid name or id')
      setInput('')
    })
  }

  let card = pokemon ? (
    <Card pokemon={pokemon} key={pokemon.id}/>
  ) : null

  return (
    <div className="container ptop">
      <div className="search">
        <form>
          <div className="form-group">
            <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Search pokemon by name or id"/>
            <button className="btn button" onClick={handleClick}>Search</button>
          </div>
        </form>
      </div>
      <div className="row justify-content-center">
        {card}
      </div>
    </div>
  )
}

export default Search
