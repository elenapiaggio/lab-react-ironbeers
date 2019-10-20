import React, { Component } from 'react';
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
            <div>
                <h1>All Beers</h1>
                {!loading && beers.map((beer, key) => {
                    return (
                        <div key={`${beer.id} - ${key}`}>
                            <Link to={`/beers/${beer.id}`}>{beer.name}</Link>
                        </div>
                    )
                })}
                {loading && <div>loading...</div>}
            </div>
        )
    }
}

export default Beers;
