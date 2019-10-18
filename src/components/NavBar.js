import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
        <div className='container'>
            <Link className='navbar-brand' to='/home' style={{ textDecoration: 'none' }}> Home</Link> | 
            <Link className='navbar-brand' to='/beers' style={{ textDecoration: 'none' }}> Beers</Link> | 
            <Link className='navbar-brand' to='/random-beer' style={{ textDecoration: 'none' }}> Random Beer</Link> | 
            <Link className='navbar-brand' to='/new-beer' style={{ textDecoration: 'none' }}> New Beer</Link>
        </div>
    </nav>
  )
}

export default navbar;