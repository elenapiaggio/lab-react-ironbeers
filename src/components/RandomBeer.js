import React, { Component } from 'react';
import Header from './Header';
import beerService from '../services/beerService';
import CardBeer from './CardBeer';

class RandomBeer extends Component {
    state = {
        beer: {},
        loading: true,
    }

    async componentDidMount() {

        try {
            const beer = await beerService.getRandomBeer();

            this.setState({
                beer,
                loading: false,
            })
        } catch (error) {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const { beer, loading } = this.state;
        return (
            <div>
                
                <h1>RandomBeer</h1>

                {loading && <div>Loading...</div> }
                {!loading && <CardBeer beer={beer} /> }
            </div>
        );
    }
}

export default RandomBeer;