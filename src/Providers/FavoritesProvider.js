import React, {useEffect, useState} from 'react';
import { FavoritesContext } from '../Context/FavoritesContext';

const FavoritesProvider = ({ children }) => {
    const [addFavJob, setAddFavJob] = useState(undefined);
  
    useEffect(() => {
        if(localStorage.favorites === undefined){
            localStorage.setItem('favorites', JSON.stringify([]));
        }
      }, []);

      useEffect(() => {
        let local = JSON.parse(localStorage.favorites);

        function checkIfJobExists() {
            if(local.length === 0){
                return false;
            } else {
                for (let i = 0; i < local.length; i++) {
                    if (local[i].id === addFavJob.id) {
                        return true; 
                    }
                  }
                  return false; 
            }
          };

          const updateLocalStorage = () => {
            if(checkIfJobExists() === true){
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
        <FavoritesContext.Provider value={{ addFavJob, setAddFavJob }}>
          {children}
        </FavoritesContext.Provider>
        </>
    )
}

export default FavoritesProvider;