import React, { Component } from 'react';
import Header from './Header';
import beerService from '../services/beerService';
import { Link } from 'react-router-dom';

class Beers extends Component {
    state = {
        beers: [],
        loading: true,
    }

    async componentDidMount() {
        try {
            const beers = await beerService.getAllBeers();

            this.setState({
                beers,
                loading: false
            })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const { beers, loading } = this.state;
        return (
            <div className='wrapper'>
                <h1>All Beers</h1>
                <Header />
                {!loading && beers.map((beer, key) => {
                    return (
                        <div className='card' key={`${beer._id} - ${key}`}>
                            <div className='img-card'>
                                <img src={beer.image_url} alt='one-beer'></img>
                            </div>
                            <div>
                                <h2>{beer.tagline}</h2>
                                <p>Created by: {beer.contributed_by}</p>
                                <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
                            </div>
                        </div>
                    )
                })}
                {loading && <div>loading...</div>}
            </div>
        )
    }
}

export default Beers;
