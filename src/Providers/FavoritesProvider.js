import React, {useEffect, useState} from 'react';
import { FavoritesContext } from '../Context/FavoritesContext';

const FavoritesProvider = ({ children }) => {
    const [addFavJob, setAddFavJob] = useState([]);
    const [loadFavJobs, setLoadFavJobs] = useState([]);
  
    useEffect(() => {
        // let favorites = JSON.parse(localStorage.getItem('favorites'));
        // if(favorites.id === undefined){
        //     localStorage.setItem('favorites', JSON.stringify(addFavJob));
        // }
        localStorage.setItem('favorites', JSON.stringify(addFavJob));
      }, [addFavJob]);

    console.log(addFavJob, 'addFavJob in provider')

    useEffect(() => {
      const items = JSON.parse(localStorage.getItem('Favorites'));
        // console.log(items, 'items in loading vav jobs provioder')
    }, [loadFavJobs]);

    return (
        <>
        <FavoritesContext.Provider value={{ addFavJob, setAddFavJob, loadFavJobs, setLoadFavJobs }}>
          {children}
        </FavoritesContext.Provider>
        </>
    )
}

export default FavoritesProvider;