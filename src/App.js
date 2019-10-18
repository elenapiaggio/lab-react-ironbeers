import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/beers' component={Beers} />
        <Route exact path='/random-beer' component={RandomBeer} />
        <Route exact path='/new-beer' component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
