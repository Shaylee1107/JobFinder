import React, {useEffect, useState} from 'react';
import JobListing from '../Components/JobListing';
import './Favorites.css';

const Favorites = () => {
    const [loadFavJobs, setLoadFavJobs] = useState('');

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('favorites'));
        setLoadFavJobs(items)
      }, []);

      const loadJobs = () => {
        if(loadFavJobs !== '' && loadFavJobs.length !== 0){
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
                   favorite="true"
                />
                )
            })) 
       } else {
        return (
            <div className="no-favorites-container montserrat">
                <div>
                    <img src="https://cdn0.iconfinder.com/data/icons/simple-lines-filled-part-1/32/31_Heart_Disabled_Unlike_Hate_Sad_Love-512.png" alt="heart" />
                </div>
                <h2> It looks like you don't have any favorites yet... </h2>
            </div>
        )
       }
    }

    return (
        <div>
            {loadJobs()}
        </div>
    )
}

export default Favorites; 