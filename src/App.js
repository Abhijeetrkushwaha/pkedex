import React from 'react'
import './App.css'
import Nav from './components/Nav';
// import PokemonList from './components/PokemonList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loader from './components/Loader';
import Footer from './components/Footer';
// import Search from './components/Search';
// import PokemonDetail from './components/PokemonDetail';

function App() {
  return (
    <Router>
      <div className="main-container">
        <Nav />
        <Loader />
        {/* <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route path="/search" component={Search} />
          <Route path="/:pokemon" component={PokemonDetail} />
        </Switch> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
