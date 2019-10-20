import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import alls from '../img/all-beers.png';
import random from '../img/random-beer.png';
import newBeer from '../img/new-beer.png';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <div className='home-card'>
                    <img src={alls} alt='all beers' />
                    <h1><Link className='navbar-brand' to='/beers' style={{ textDecoration: 'none' }}> All Beers</Link> </h1>
                    <p>
                        Auctor scelerisque volutpat ridiculus dapibus sollicitudin convallis suscipit mi nascetur,
                        ullamcorper euismod tincidunt natoque nullam semper sem sociosqu dictumst,
                        posuere cras facilisis ad phasellus.
                    </p>
                </div>
                <div className='home-card'>
                    <img src={random} alt='random-beer'></img>
                    <h1><Link className='navbar-brand' to='/random-beer' style={{ textDecoration: 'none' }}> Random Beer</Link> </h1>
                    <p>
                        Primis suspendisse porttitor libero interdum tristique felis aptent dictumst, sagittis
                        placerat euismod luctus posuere quam neque mi, nulla tincidunt laoreet leo potenti vitae et.
                    </p>
                </div>
                <div className='home-card'>
                    <img src={newBeer} alt='new-beer'></img>
                    <h1><Link className='navbar-brand' to='/new-beer' style={{ textDecoration: 'none' }}> New Beer</Link></h1>
                    <p>
                        Posuere tristique tincidunt sociis arcu justo nibh tempus varius, id vestibulum quisque
                        ligula semper egestas condimentum class, senectus felis scelerisque parturient pretium at cursus.
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;