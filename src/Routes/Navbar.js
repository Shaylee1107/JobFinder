import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import locationMarker from "../images/location_marker.png";

const Navbar = () => {
    return (
        <div className='flex'>
            <div>
              <Link to="/"><img 
                className='img nabar-items' 
                src={locationMarker} 
                alt="location icon"
              />
              </Link>
              <Link className='title montserrat' to="/" >Job Finder</Link>
              <Link className='nabar-items links montserrat' to="/favorites">Favorites</Link>
              </div>
        </div>
    )
}

export default Navbar; 

// src="https://cdn1.iconfinder.com/data/icons/flat-design-basic-set-7/24/location-map-where-global-positioning-system-512.png" 