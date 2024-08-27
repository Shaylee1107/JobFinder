import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from '../Pages/Home';
import Favorites from '../Pages/Favorites';
// import FavoritesProvider from '../Providers/FavoritesProvider';


const AppRoutes = () => {
    return (
        <>
            {/* <FavoritesProvider> */}
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/favorites" element={<Favorites />}/>
              </Routes>
            {/* </FavoritesProvider> */}
        </>
    )
}

export default AppRoutes; 