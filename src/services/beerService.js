import axios from 'axios';

class BeerService {
    constructor() {
        this.axios = axios.create({
            // baseURL: 'http://localhost:3000/api',  
            baseURL: 'https://ih-beer-api.herokuapp.com',
        });
    }

    async getAllBeers() {
        return this.axios.get('/beers')
            .then(({ data: beers }) => beers)
    }

    async getBeerById(id) {
        return this.axios.get(`/beers/${id}`)
            .then(({ data: beer }) => beer);
    }
}

const beerService = new BeerService()

export default beerService;