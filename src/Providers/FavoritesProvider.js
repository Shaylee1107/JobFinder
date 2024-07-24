import React, {useEffect, useState} from 'react';
import { FavoritesContext } from '../Context/FavoritesContext';

const FavoritesProvider = ({ children }) => {
    const [addFavJob, setAddFavJob] = useState([]);
  
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify([]));
      }, []);

      useEffect(() => {
        const local = JSON.parse(localStorage.favorites);
        
        for(let i = addFavJob.length-1; i <= addFavJob.length-1; i++){
            if(addFavJob[i] !== undefined){
                local.push(addFavJob[i]);
                localStorage.setItem('favorites', JSON.stringify(local));
            }
      }
        
        
        
        console.log(local, 'localNOW')
        
      }, [addFavJob])

    return (
        <>
        <FavoritesContext.Provider value={{ addFavJob, setAddFavJob }}>
          {children}
        </FavoritesContext.Provider>
        </>
    )
}

export default FavoritesProvider;