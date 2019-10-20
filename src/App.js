import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Beers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Home from './components/Home';
import BeerDetail from './components/BeerDetail';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/beers' component={Beers} />
        <Route exact path="/beers/:id" component={BeerDetail} />
        <Route exact path='/random-beer' component={RandomBeer} />
        <Route exact path='/new-beer' component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;