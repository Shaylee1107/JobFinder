import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className='flex'>
            <div>
              <img 
                className='img nabar-items' 
                src="https://cdn1.iconfinder.com/data/icons/flat-design-basic-set-7/24/location-map-where-global-positioning-system-512.png" 
                alt="location icon"
              />
              <h1 className='title nabar-items montserrat'>Job Finder</h1>
            
                <Link className='nabar-items links montserrat' to="/">Home</Link>
                <Link className='nabar-items links montserrat' to="/favorites">Favorites</Link>
                </div>
        </div>
    )
}

export default Navbar; 