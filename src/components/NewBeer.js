import React, { Component } from 'react';
import Header from './Header';
import '../css/NewBeer.css';
import beerService from '../services/beerService';

class NewBeer extends Component {

    state = {
        name: '',
        tagline: '',
        description:'',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: '',
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        beerService.addNewBeer(this.state);

        this.setState({
            name: '',
            tagline: '',
            description:'',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: '',
            contributed_by: '',
        });
    }

    handleChange(event){
        let { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    }

    render() {
        return (
            <div className='wrapper-form'>
                <Header />
                <h1>New Beer</h1>
                <div className='new-beer-form'>
                    <form onSubmit={this.handleFormSubmit}>
                        <label>Name</label>
                        <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />

                        <label>tagline:</label>
                        <input type="text" name="tagline" value={this.state.tagline} onChange={(e) => this.handleChange(e)} />

                        <label>description:</label>
                        <textarea name="description" checked={this.state.description} onChange={(e) => this.handleChange(e)} ></textarea>

                        <label>first_brewed:</label>
                        <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={(e) => this.handleChange(e)} />

                        <label>brewers_tips:</label>
                        <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={(e) => this.handleChange(e)} />

                        <label>attenuation_level:</label>
                        <input type="text" name="attenuation_level" value={this.state.attenuation_level} onChange={(e) => this.handleChange(e)} />

                        <label>contributed_by:</label>
                        <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={(e) => this.handleChange(e)} />

                        <input className='submit-button' type="submit" value="ADD NEW BEER" />
                    </form>
                </div>
            </div>
        );
    }
}

export default NewBeer;