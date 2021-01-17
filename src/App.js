import React from 'react'
import './App.css'
import Nav from './components/Nav';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <div className="main-container">
      <Nav />
      <PokemonList />
    </div>
  );
}

export default App;
