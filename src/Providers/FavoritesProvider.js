import React, {useEffect, useState} from 'react';
import { FavoritesContext } from '../Context/FavoritesContext';

const FavoritesProvider = ({ children }) => {
    const [addFavJob, setAddFavJob] = useState(undefined);
   
    function checkIfJobIsFavorited(compareID) {
        const local = JSON.parse(localStorage.favorites);
        if(local.length === 0){
            return false;
        } else {
            for (let i = 0; i < local.length; i++) {
                if (local[i].id === compareID) {
                    return true; 
                }
              }
              return false; 
        }
      };
  
    useEffect(() => {
        if(localStorage.favorites === undefined){
            localStorage.setItem('favorites', JSON.stringify([]));
        }
      }, []);

      useEffect(() => {
          const local = JSON.parse(localStorage.favorites);
          const updateLocalStorage = () => {
            if(checkIfJobIsFavorited(addFavJob.id) === true){
                let filterdArray = local.filter((job) => {
                    return job.id !== addFavJob.id;
                });
                 localStorage.setItem('favorites', JSON.stringify(filterdArray)
                );
            } else {
                local.push(addFavJob);
                localStorage.setItem('favorites', JSON.stringify(local));
            }
          };

          if(addFavJob !== undefined){
            updateLocalStorage();
          }

      }, [addFavJob])

    return (
        <>
        <FavoritesContext.Provider value={{ setAddFavJob, checkIfJobIsFavorited }}>
          {children}
        </FavoritesContext.Provider>
        </>
    )
}

export default FavoritesProvider;