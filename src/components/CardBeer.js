import React from 'react';
import '../css/CardBeer.css';
import Header from '../components/Header'

const CardBeer = (props) => {
    const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by } = props.beer;
    console.log('description', description);

    return (
        <div>
            <Header />
            <div className='card'>
                <div className='image-card'>
                    <img src={image_url} alt='the-actual-beer'></img>
                </div>

                <h2>{name} {attenuation_level} </h2>
                <h3>{tagline}  {first_brewed}</h3>
               
                

                <p>{description}</p>
                {contributed_by}


                
            </div>
        </div>
    );
};

export default CardBeer;