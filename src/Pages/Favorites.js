import React, {useEffect, useState} from 'react';
// import { FavoritesContext } from '../Context/FavoritesContext';
import JobListing from '../Components/JobListing';

const Favorites = () => {
    const [loadFavJobs, setLoadFavJobs] = useState('');

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('favorites'));
        console.log(items, 'items')
        setLoadFavJobs(items)
          // console.log(items, 'items in loading vav jobs provioder')
      }, []);

      const loadJobs = () => {
        if(loadFavJobs !== ''){
            console.log(loadFavJobs, 'loadFavJobs')
            return (loadFavJobs.map((job) => {
                return (
                <JobListing 
                   title={`${job.title}`} 
                   company={`${job.company}`} 
                   location={`${job.location}`}
                   salary={`${job.salary}`}
                   description={`${job.description}`}
                   companyWebsite={`${job.companyWebsite}`}
                   key={`${job.id}`}
                   id={`${job.id}`}
                />
                )
            })) 
       }
        
    }

    return (
        <div>
            DA favs
            {loadJobs()}
        </div>
    )
}

export default Favorites; 