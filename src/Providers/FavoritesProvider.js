import React, {useEffect, useState} from 'react';
import { FavoritesContext } from '../Context/FavoritesContext';

const FavoritesProvider = ({ children }) => {
    const [addFavJob, setAddFavJob] = useState(undefined);
    const [isThere, setIsThere] = useState(false);
  
    useEffect(() => {
        if(localStorage.favorites === undefined){
            localStorage.setItem('favorites', JSON.stringify([]));
        }
      }, []);

      useEffect(() => {
        let local = JSON.parse(localStorage.favorites);

        const updateLocalStorage = () => {
            console.log(isThere, 'isThere')
            if(isThere === true){
                setIsThere(false);
                let filterdArray = local.filter((job) => {
                    return job.id !== addFavJob.id;
                });
                console.log(filterdArray, 'filteredArray')
                return localStorage.setItem('favorites', JSON.stringify(filterdArray));
            } else {
                local.push(addFavJob);
                return localStorage.setItem('favorites', JSON.stringify(local));
            }
        }

        if(addFavJob !== undefined){
                local.forEach((job) => {
                    if(job.id === addFavJob.id){
                        setIsThere(true); 
                    }
                });
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