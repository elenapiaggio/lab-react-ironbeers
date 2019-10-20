import React, { Component } from 'react';
import beerService from '../services/beerService';
import CardBeer from './CardBeer'

class BeerDetail extends Component {
    state = {
        beer: {},
        loading: true,
    }

    async componentDidMountsss() {
        const { id } = this.props.match.params;
        try {
            const beer = await beerService.getOneBeer(id)
            this.setState({
                beer,
                loading: false
            })
        } catch (error) {
            console.log(error);
        }
    }


    async componentDidMount() {
        const { match: { params: { id } } } = this.props;

        try {
            const beer = await beerService.getBeerById(id)

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
        //   console.log(beer);

        return (
            <>
                {loading && <div>Loading...</div> }
                {!loading && <CardBeer beer={beer} /> }
                {/* <CardBeer /> */}
                {/* {
                    !loading && 
                    <div>
                        <p> aqui hola que ase{beer.name}</p>
                        <img src={beer.image_url} alt="beer" />
                    </div> 
                } */}
            </>
        );
    }
}

export default BeerDetail;