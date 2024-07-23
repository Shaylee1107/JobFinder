import React, {useContext, useState} from 'react';
import { FavoritesContext } from '../Context/FavoritesContext';

const Favorites = () => {
    const { addFavJob, setAddFavJob, loadFavJobs, setLoadFavJobs } = useContext(FavoritesContext);

    return (
        <div>
            DA favs
        </div>
    )
}

export default Favorites; 